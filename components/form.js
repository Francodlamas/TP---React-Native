import React, {  useState } from 'react';
import { TextInput,Button,StyleSheet,Text,View,Alert } from 'react-native-web';
import { enviarEmailPsw } from '../Axios/AxiosClient';


const Form = () => {

    const [aux,setAux]=useState(true);
    const [token,setToken]=useState(true);
    const [obj, setObj] = useState({
            email: null,
            password: null,
    });
    const validar =async()=>{
    if(obj.email==null || obj.password==null || obj.email==""||obj.password==""){
    setAux(false)
    
    }
    else{
         setAux(true)
       setToken (await enviarEmailPsw(obj))
       console.log("datos ingresados")
    }
}

    return (
         
            <View style={styles.container}>
               
                <Text style={styles.iniciarSesion}>Iniciar Sesíon</Text><br></br>
                
                {!aux &&
                    <Text>No ingreso los valores correspondientes</Text>
                }
                 <TextInput
                        title="Ingrese Usuario"
                        onChangeText={(value)=>{setObj({...obj,email: value})}}
                        value={obj.email}
                    />
            
                 <TextInput 
                        onChangeText={(value)=>{setObj({...obj,password: value})}}       
                        value={obj.password}
                />
                <Button
                onPress={validar}
                />

                
               
            </View>    
         

        )
        
}
const styles = StyleSheet.create({

        iniciarSesion:{
            fontSize: 75,
            marginTop:'30px'
            
        },
        container:{
            flex: 1,
            width: '800px',
            height:'800px',
            alignItems: 'center',
            justifyContent: 'center',
        }

  });
  
export default Form;