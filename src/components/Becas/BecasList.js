import React, { useEffect, useState } from 'react'
import { View,ScrollView } from 'react-native';

//Components:
import BecaItem from './BecaItem';
import * as BecasServer from './BecasServer';
import Navbar from '../Navbar/Navbar';

const BecasList = () => {
    const [becasp, setBecasp] = useState([]);
    const listBecas = async () => {
        try {
            const res = await BecasServer.listBecas();
            const data = await res.json();
            setBecasp(data);
            //console.log(data)
        } catch (error) {
            console.log(error);
        }
    };

    //se le da arreglo vacio para que apenas se renderice, se listen los componentes solo una vez
    useEffect(() => {
        listBecas();
    }, []);

    return (
        <><Navbar /><ScrollView>
            {becasp.map((beca) => (
                //<h2> {beca.nombre} </h2>
                //<BecaItem key={beca.key} beca={beca} />
                <BecaItem beca={beca} listBecas={listBecas} key={beca.url} />
            ))}
        </ScrollView></>
        
    );

};

export default BecasList;

