import React, { Component, useEffect, useState } from 'react';
import { traerPlatos } from '../axios/axiosClient';
import { StyleSheet, Text, Image , View, TextInput, FlatList  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useContextState, ActionTypes, contextState} from '../contextState'
//import React, {  useState } from 'react';


const Home =({navigation})=>{
  //const {contextState,setContextState}=useContextState();
  const [buscador,setBuscador]=useState("");
  const [platos,setPlatos]=useState([]);
  
  const renderItem = ({ item }) => {
    return <View>
      <Text>{item.title}</Text>
      <Image style={styles.tinyLogo}
      source={{
          uri: item.image.toString(),
        }}>
        </Image>
    
      
    </View>
  };

  const onChange = async (letras) => {
    if (letras.length > 2) {
    const data = await traerPlatos(letras);
    setPlatos(data);
    console.log(platos)
  }
    
}

  return (
    
    <View>
      <Text>Datos ingresados</Text>
      <TextInput 
      onChangeText={onChange}
      />
        <FlatList
          numColumns={999}
          data={platos}
          keyExtractor={(data) => data.title}
          renderItem={renderItem}
        />
                

            
    </View>  
  ); 
}
const styles = StyleSheet.create({

  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default Home
