import React, { Component, useEffect, useState, FlatList } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import React, {  useState } from 'react';


const Home =({navigation})=>{
  const [buscador,setBuscador]=useState("");
  
  

  return (
    
    <View>
      <Text>fdsfewf</Text>
      <TextInput 
      /*onChangeText={(text) => {
        if (text.length > 2) {
          await traerPlatos(query)
        }
      }}*/ 
      value={buscador}
      />





    </View>
   
  ); 
}

export default Home