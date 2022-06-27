import { useEffect, useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import * as BecasServer from './BecasServer';
//import { useNavigate, useParams } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
import imagen1 from '../Imagenes/imagen1.jpg';
import {useNavigation} from '@react-navigation/native'

const BecasUpdate = ({ route }) => {
    
    const { id } = route.params;
    //nombre:"",categoria:"",porcentaje_financiacion:100,pais:"",universidad:"",requerimiento:""
    const navigate = useNavigation();
    const initialState={nombre:"",categoria:"",porcentaje_financiacion:100,pais:"",universidad:"",requerimiento:""};
    const [beca, setBecasp] = useState({});

   
    
    const { control, handleSubmit, reset } = useForm({});
     const onSubmit = async data => {
        try {
            body = {
                nombre: data.nombre,
                categoria: data.categoria,
                porcentaje_financiacion: data.porcentaje_financiacion,
                pais:data.pais,
                universidad: data.universidad,
                requerimiento: data.requerimiento
            }
            await BecasServer.updateBeca(id,body);
            navigate.navigate("BecasList");
        } catch (error) {
            console.log(error);
        }
       
    }

    const getBeca = async (becaId) => {
        try {
            const res=await BecasServer.getBeca(becaId)
            const data=await res.json();
            console.log(data)
            const {nombre,categoria,porcentaje_financiacion,pais,universidad,requerimiento}=data;
            setBecasp({nombre,categoria,porcentaje_financiacion,pais,universidad,requerimiento});
          
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getBeca(id);
    },[]);

    useEffect(()=>{
        reset(beca);
    },[beca]);


   return (

        <View>
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: {onChange,value } }) => (
                <TextInput
                    label="Nombre"
                    style={styles.input}
                    onChangeText={onChange}
                    value= {value}
                    placeholder="Ingrese el nombre de la beca"
                />
            )}
           
            name="nombre"
        />
        
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
                    value= {value}
                    placeholder="Ingrese la categoria"
                />
            )}
            name="categoria"
        />
        
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
                    value= {String(value)}
                    keyboardType="numeric"
                    placeholder="Ingrese el número de porcentaje"
                />
            )}
            name="porcentaje_financiacion"
        />
        
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
                    value= {value}
                    placeholder="Ingrese el nombre del país"
                />
            )}
            name="pais"
        />
        
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
                    value= {value}
                    placeholder="Ingrese el nombre de la universidad"
                />
            )}
            name="universidad"
        />

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
                    value= {value}
                    placeholder="Ingrese el requerimiento"
                />
            )}
            name="requerimiento"
        />

        <Button title="Actualizar beca" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BecasUpdate;