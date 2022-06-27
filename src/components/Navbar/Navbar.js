import React from "react";
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

    const navigation = useNavigation();

    return(
        <Appbar style={styles.top}>
            <Appbar.Action icon="menu" title="HOME" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: "BecasList",
                },],
            })} />
            <Appbar.Action icon="rowing" title="Registrar beca" onPress={() => navigation.reset({
                index: 0,
                routes: [{
                    name: "BecasForm",
                },],
            })} />
            
        </Appbar>
    );
}

const styles = StyleSheet.create({
    top: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
    },
})

export default Navbar;