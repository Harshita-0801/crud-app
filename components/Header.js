import React from "react";
import {View,Text, StyleSheet} from "react-native"

import colors from "../constants/colors";
const Header = props =>{
    return (
        <View style ={styles.header}>
            <Text style ={styles.headerTitle}> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   header:{
        width : '100%',
        height: 90,
        paddingTop:36,
        backgroundColor: colors.headerColor,
        alignItems :'center',
        justifyContent: 'center',
         
    },
    headerTitle:{
        color:'white',
        fontSize: 24
    }
});

export default Header;

