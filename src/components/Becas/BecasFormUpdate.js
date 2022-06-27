import { useEffect, useState } from "react";
import { View, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as BecasServer from './BecasServer';
//import { useNavigate, useParams } from 'react-router-dom';
import imagen2 from '../Imagenes/imagen2.jpg';
import imagen1 from '../Imagenes/imagen1.jpg';

const BecasFormUpdate = (params) => {
    //const navigate = useNavigate();
    //const params = useParams();
    //console.log(params)
    //const { params } = props.url;

    const initialState={nombre:"",categoria:"",porcentaje_financiacion:100,pais:"",universidad:"",requerimiento:""};
    const [beca, setBecasp] = useState(initialState);

    const handleInputChange=(e)=>{
        setBecasp({...beca,[e.target.name]:e.target.value});
    };

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            let res;
            if (!params.id){
                res=await BecasServer.registerBeca(beca);
                const data=await res.json();
                if (data.message==="Success"){
                setBecasp(initialState);
            }

            }else{
                await BecasServer.updateBeca(params.id,beca);
            }
            
            navigate('/');

        }catch(error){
            console.log(error)
        }


        console.log(beca);
    };

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

    
    useEffect(()=>{
        if (params.id){
            getBeca(params.id);
        }
        // eslint-disable-next-line

    },[]);

   return (

        <View>
        <Controller
            control={beca}
            rules={{
                required: true,
            }}
            render={({ field: { value } }) => (
                <TextInput
                    label="Nombre"
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={value}
                    placeholder="Ingrese el nombre de la beca"
                />
            )}
            name="nombre"
        />
        
        <Controller
            control={beca}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { value } }) => (
                <TextInput
                    label="Categoria (Nacional o Internacional)"
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={value}
                    placeholder="Ingrese la categoria"
                />
            )}
            name="categoria"
        />
        
        <Controller
            control={beca}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { value } }) => (
                <TextInput
                    label="Porcentaje de financiación"
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={value}
                    keyboardType="numeric"
                    placeholder="Ingrese el número de porcentaje"
                />
            )}
            name="porcentaje"
        />
        
        <Controller
            control={beca}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { value } }) => (
                <TextInput
                    label="Pais que ofrece la beca"
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={value}
                    placeholder="Ingrese el nombre del país"
                />
            )}
            name="pais"
        />
        
        <Controller
            control={beca}
            rules={{
                required: true,
                maxLength: 100,
            }}
            render={({ field: { value } }) => (
                <TextInput
                    label="Universidad que ofrece la beca"
                    style={styles.input}
                    onChangeText={handleInputChange}
                    value={value}
                    placeholder="Ingrese el nombre de la universidad"
                />
            )}
            name="universidad"
        />

        <Button title="Registrar beca" onPress={handleSubmit(setBecasp)} />
        </View>
    );
};

export default BecasFormUpdate;