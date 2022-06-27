import React from "react";
import * as BecasServer from './BecasServer';
//import { useNavigate } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen1.jpg';
//import imagen1 from '../Imagenes/imagen1.jpg';
//Se ponen las tarjetas que se van a listar
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const BecasDetalles = ({ route }) => {
    const navigate = useNavigation();
    const { beca } = route.params;
    



    //<Button onClick={() => navigate(`/updateBeca/${ getUltimoItem(beca.url)}`)} className="btn btn-info my-2">Actualizar información</Button>
    return (
        <View className="col-md-4 mb-4">
            <View className="card text-center" style={styles.cardStyle}>
                <Image style={styles.imagen} source={imagen2} alt="" />
                <View style={styles.tarjeta}>
                    <Text style={styles.titulo}>{beca.nombre}</Text>
                    <Text style={styles.categoria}>Categoría: {beca.categoria}</Text>
                    <Text style={styles.categoria}>Porcentaje de financiación: {beca.porcentaje_financiacion} %</Text>
                    <Text style={styles.categoria}>País: {beca.pais}</Text>
                    <Text style={styles.categoria}>Universidad: {beca.universidad}</Text>
                    <Text style={styles.categoria}>Requerimiento: {beca.requerimiento}</Text>
                    
                   
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    imagen: {
        width: '90%',
        height: 210,
        alignSelf: 'center',
        marginTop: 40,
        marginVertical:20,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        color: 'darkcyan',
        
    },
    categoria: {
        textAlign: 'center',
        fontSize: 20,
    },
    tarjeta: {
        marginBottom: 20,
    },
    cardStyle: { 
        marginTop: 60,
        backgroundColor: '#ffe4e1',
    },
})

export default  BecasDetalles;