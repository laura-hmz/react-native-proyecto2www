import { useEffect, useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import * as BecasServer from './BecasServer';
//import { useNavigate, useParams } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
import imagen1 from '../Imagenes/imagen1.jpg';
import {useNavigation} from '@react-navigation/native'
import Navbar from '../Navbar/Navbar';

const BecasForm = () => {
    
    //nombre:"",categoria:"",porcentaje_financiacion:100,pais:"",universidad:"",requerimiento:""
    const navigate = useNavigation();
    const { control, handleSubmit } = useForm({});
     const onSubmit = async data => {
        try {
            beca = {
                nombre: data.nombre,
                categoria: data.categoria,
                porcentaje_financiacion: data.porcentaje_financiacion,
                pais:data.pais,
                universidad: data.universidad,
                requerimiento: data.requerimiento
            }
            await BecasServer.registerBeca(beca);
            navigate.navigate("BecasList");
        } catch (error) {
            console.log(error);
        }
       
    }

   return (
        <><Navbar /><View>
           <Controller
               control={control}
               rules={{
                   required: true,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Nombre"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Ingrese el nombre de la beca" />
               )}
               name="nombre" />

           <Controller
               control={control}
               rules={{
                   required: true,
                   maxLength: 100,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Categoria (Nacional o Internacional)"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Ingrese la categoria" />
               )}
               name="categoria" />

           <Controller
               control={control}
               rules={{
                   required: true,
                   maxLength: 100,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Porcentaje de financiación"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       keyboardType="numeric"
                       placeholder="Ingrese el número de porcentaje" />
               )}
               name="porcentaje_financiacion" />

           <Controller
               control={control}
               rules={{
                   required: true,
                   maxLength: 100,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Pais que ofrece la beca"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Ingrese el nombre del país" />
               )}
               name="pais" />

           <Controller
               control={control}
               rules={{
                   required: true,
                   maxLength: 100,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Universidad que ofrece la beca"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Ingrese el nombre de la universidad" />
               )}
               name="universidad" />

           <Controller
               control={control}
               rules={{
                   required: true,
                   maxLength: 100,
               }}
               render={({ field: { onChange, value } }) => (
                   <TextInput
                       label="Requerimiento"
                       style={styles.input}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Ingrese el requerimiento" />
               )}
               name="requerimiento" />

           <Button title="Registrar beca" onPress={handleSubmit(onSubmit)} />
       </View></>
    );
};

const styles = StyleSheet.create({

});

export default BecasForm;