import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NavigationContainer } from '@react-navigation/native'
//import reportWebVitals from './reportWebVitals';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




//components: 
import BecasList from './src/components/Becas/BecasList';
import Navbar from './src/components/Navbar/Navbar';
import BecasForm from './src/components/Becas/BecasForm';
import BecasDetalles from './src/components/Becas/BecasDetalles';

//import "bootstrap/dist/css/bootstrap.min.css";
//import './index.css';
import BecasUpdate from './src/components/Becas/BecasUpdate';

const Stack = createNativeStackNavigator()

function MyStack(){
  return (
    <Stack.Navigator>
        
        <Stack.Screen name="BecasList" component={BecasList}/>
        <Stack.Screen name="BecasForm" component={BecasForm}/>
        <Stack.Screen name="BecasUpdate" component={BecasUpdate}/>
        <Stack.Screen name="BecasDetalles" component={BecasDetalles}/>
    
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      
        <MyStack/>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
