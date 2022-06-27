import React from "react";
import * as BecasServer from './BecasServer';
//import { useNavigate } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
//import imagen1 from '../Imagenes/imagen1.jpg';
//Se ponen las tarjetas que se van a listar
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

function BecaItem({ beca, listBecas }) {
    const navigate = useNavigation();

    const handDelete = async (becaUrl) => {
        await BecasServer.deleteBeca(becaUrl);
        console.log(becaUrl);
        listBecas();

    };

    //const getPenultimoItem = thePath => (thePath.substring(thePath.lastIndexOf('/') - 1)).slice(0, -1);
    //const getUltimoItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    const kkk = thePath => parseInt(thePath.slice(29));

    const prueba = async (becaID) => {
        console.log(becaID);
        console.log(kkk(becaID));



    };



    //<Button onClick={() => navigate(`/updateBeca/${ getUltimoItem(beca.url)}`)} className="btn btn-info my-2">Actualizar información</Button>
    return (
        <View className="col-md-4 mb-4">
            <View className="card text-center" style={styles.cardStyle}>
                <Image style={styles.imagen} source={imagen2} alt="" />
                <View style={styles.tarjeta}>
                    <Text style={styles.titulo}>{beca.nombre}</Text>
                    <Text style={styles.categoria}>Categoría: {beca.categoria}</Text>
                    <Button title="Más detalles" onPress={() => navigate.navigate("BecasDetalles", {
                    beca: beca })} ></Button>
                    <Button title="Eliminar Beca" onPress={() => beca.url && handDelete(beca.url)}></Button>
                    <Button title="Actualizar información" onPress={() => navigate.navigate("BecasUpdate", {
                    id: kkk(beca.url) })}></Button>

                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    imagen: {
        width: '80%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'italic',
    },
    categoria: {
        textAlign: 'center',
        fontSize: 15,
    },
    tarjeta: {
        marginBottom: 20,
    },
    cardStyle: { 
        marginTop: 10,
        backgroundColor: '#ffe4e1',
    },
})

export default BecaItem;