import React, { Component, useEffect, useState } from 'react';
import { traerPlatos } from '../axios/axiosClient';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useContextState, ActionTypes, contextState} from '../contextState'
import { Button } from 'react-native-web';



const Home =({navigation})=>{
  const [buscador,setBuscador]=useState("");
  const [platos,setPlatos]=useState([]);
  const {contextState,setContextState}=useContextState();

  const renderItem = ({ item }) => {
    return <TouchableOpacity style={styles.item} onPress={() => {
      console.log(item.id)
      navigation.navigate('Info',{id:item.id})}
      }>
      <Text style={styles.title}>{item.title}</Text>
      <Image 
    
      style={styles.tinyLogo}
      source={{
          uri: item.image.toString(),
        }} >
        </Image>
 
    </TouchableOpacity>
   
  };

  const onChange = async (letras) => {
    if (letras.length > 2) {  
    const data = await traerPlatos(letras); 
    setPlatos(data);
    console.log(platos)
  }
    
}

  return (
    
    <View > 
      <Image 
      style={styles.tinyLogo}
      source={{
          uri: contextState.menu?.platos[0]?.image.toString(),
        }}></Image>
      <Text>{contextState.menu?.platos[0]?.title}</Text>
      <Button onPress={() => navigation.navigate('Info',{id:contextState.menu?.platos[0]?.id})}></Button>
      <Text>Datos ingresados</Text>
      <TextInput 
      onChangeText={onChange}
      />
  
      
       <SafeAreaView style={styles.container}>
        <FlatList 
          data={platos}
          keyExtractor={(data) => data.title}
          renderItem={renderItem}
        />
        
        </SafeAreaView>

           
    </View>  
  ); 
}
const styles = StyleSheet.create({

  tinyLogo: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 70,
    height:70,
  },
});

export default Home
