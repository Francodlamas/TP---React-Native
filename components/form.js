import React, { useState } from 'react';
import { TextInput,Button,StyleSheet,Text,View,Alert } from 'react-native-web';

const Form = () => {
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

const onSubmit =()=>{

}

    return (
            <View>
                 <TextInput
                        title="Ingrese Usuario"
                        onChangeText={setUsername}
                        value={username}
                />
            
                 <TextInput        
                        onChangeText={setPassword}
                        value={password}
                />
                <Button
                onPress={onSubmit}
                />

                

            </View>    
        

        )
        
}
export default Form;
    