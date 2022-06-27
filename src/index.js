import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NavigationContainer } from '@react-navigation/native'
//import reportWebVitals from './reportWebVitals';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//components: 
import BecasList from './components/Becas/BecasList';
import Navbar from './components/Navbar/Navbar';
import BecasForm from './components/Becas/BecasForm';
import BecaFormDetalles from './components/Becas/BecaFormDetalles';

//import "bootstrap/dist/css/bootstrap.min.css";
//import './index.css';
import BecasListPopulares from './components/Becas/BecasListPopulares';

const Stack = createNativeStackNavigator()

function MyStack(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="BecasList" component={BecasList}/>
        <Stack.Screen name="BecasForm" component={BecasForm}/>
        <Stack.Screen name="BecaFormDetalles" component={BecaFormDetalles}/>
        <Stack.Screen name="BecasListPopulares" component={BecasListPopulares}/>

    </Stack.Navigator>
  )
}

export default function index(){
  return (
  <NavigationContainer>
    <Navbar/>
    <view className='container my-4'>
      <MyStack/>
    </view>
  </NavigationContainer>

  )
}


//en este primer div, acomodo los margenes de todo el tablero
//const root = ReactDOM.createRoot(document.getElementById('main'));
//root.render(
//  <NavigationContainer>
//    <Navbar/>
//    <view className='container my-4'>
//      <MyStack/>
//    </view>
//  </NavigationContainer>

//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
//registerRootComponent();

