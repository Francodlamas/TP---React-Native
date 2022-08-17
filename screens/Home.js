import React, { Component, useEffect, useState } from 'react';
import { traerPlatos } from '../axios/axiosClient';
import { StyleSheet, Text, View, TextInput, FlatList  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useContextState, ActionTypes, contextState} from '../contextState'
//import React, {  useState } from 'react';


const Home =({navigation})=>{
  //const {contextState,setContextState}=useContextState();
  const [buscador,setBuscador]=useState("");
  const data= [
    { 
      title: "data.title 1",
    },
    { 
      title: "data.title 2",
    },
    { 
      title: "data.title 3",
    },
  ];
  
  const renderItem = ({ item }) => (

      <Text >{item.title}</Text>
    
  );


  return (
    
    <View>
      <Text>Datos ingresados</Text>
      <TextInput 
      onChangeText={(letras) => {
        if (letras.length > 2) {
          traerPlatos(letras).then((data) => {
            setBuscador(data)
            console.log(data)
          })
        }
      }}
      />
      <FlatList
        numColumns={4}
        keyExtractor={(item) => item.title}
        data={data}
        renderItem={renderItem}
      />
      
    </View>  
  ); 
}

export default Home
