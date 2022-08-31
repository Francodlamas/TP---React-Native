import React, {  useState, useEffect} from 'react';
import { TextInput,Button,StyleSheet,Text,View,Alert,Image } from 'react-native';
import {useContextState, ActionTypes} from '../contextState'
import { useNavigation } from '@react-navigation/native';
import { detallePlato } from '../axios/axiosClient';


const Info = ({navigation,route}) => {
    
    const [plato,setPlato]=useState("");
    const {contextState,setContextState}=useContextState();
    const agregarPlato =()=>{
      console.log(plato.title)
      setContextState({
        type: ActionTypes.SetMenuPlatos,
        value:plato,
        });
      console.log(contextState.menu.platos[1])
      navigation.push('Home')
    }
    const eliminarPlato =()=>{
      const id= route.params.id;
      const indexPlato=contextState.menu.platos.findIndex(idPlato=>idPlato===id)
      contextState.menu.platos = [
        ...contextState.menu.platos.slice(0, indexPlato),
        ...contextState.menu.platos.slice(indexPlato + 1),
    ];
    console.log(contextState.menu.platos)
   

      navigation.push('Home')
    }

    useEffect (async () => {
        console.log(route.params.id)
        const id= route.params.id;
        const data = await detallePlato(id); 
        console.log(data);
        setPlato(data);
    },[route.params.id]);

return (      
    <View>
    <Image 
    
    style={styles.tinyLogo}
    source={{
        uri: plato.image
      }} >
    </Image>
    <Text>Plato: {plato.title}</Text>
    <Text>Que tan sano es: {plato.healthScore}</Text>
    <Text>Precio por unidad: {plato.pricePerServing}</Text>
    {plato.vegan ? <Text>El plato es vegano</Text>:<Text>El plato no es vegano</Text>}
    {plato.vegetarian ? <Text>El plato es vegetariano</Text>:<Text>El plato no es vegetariano</Text>}
    {contextState.menu.platos.find(p => p.id === route.params.id) ? <Button style={styles.button}title="Eliminar"onPress={eliminarPlato}/> : <Button style={styles.button}title="Agregar"onPress={agregarPlato}/>}


    
    </View> 
)

}
const styles = StyleSheet.create({

    tinyLogo: {
      width: 100,
      height: 100,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
  });



export default Info;