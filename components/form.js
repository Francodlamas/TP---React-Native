import React, { Component, useEffect, useState } from 'react';
import { TextInput,Button,StyleSheet,Text,View,Alert } from 'react-native-web';
import { enviarEmailPsw } from '../Axios/AxiosClient';


const Form = () => {

    const [aux,setAux]=useState(true);
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
       await enviarEmailPsw(obj)
       console.log("datos ingresados")
    }
}

    return (
            <View>
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
export default Form;