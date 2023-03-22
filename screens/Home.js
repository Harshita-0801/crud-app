import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import colors from "../constants/colors";

const Home = ({navigation,props}) =>{
return(
<View style={styles.container}>
    <TouchableOpacity style={styles.button}  onPress={() =>navigation.navigate('Insert')}>
    <Text style={styles.buttonText}>Insert Employee</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('SearchId')} >
    <Text style={styles.buttonText}>Search Employee By Id</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('SearchDept')}>
    <Text style={styles.buttonText}>Search Employee By Department</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('List')}>
    <Text style={styles.buttonText}>View Employees</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Delete')}>
    <Text style={styles.buttonText}>Delete Employee</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('UpdateSearch')}>
    <Text style={styles.buttonText}>Update Employee</Text>
    </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#EEEEEE" 
      },
      button: {
        backgroundColor: colors.btnColor,
        borderRadius: 10, // Add the borderRadius style property here
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 20,
        width: 180 
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
      }
});

export default Home;
