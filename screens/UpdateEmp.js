import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ipadress from '../constants/ipadress';


const FormScreen = ({navigation,route}) => {


    const Id = route.params.Id;
    const [textFirstName, setTextFirstName] = useState(route.params.FirstName );
    const [textLastName, setTextLastName] = useState(route.params.LastName);
    const [textSalary, setTextSalary] = useState(route.params.Salary);
    const [textAge, setTextAge] = useState(route.params.Age);
    const [textDept, setTextDept] = useState(route.params.Dept);
    const [textDateOfJoining,setTextDateOfJoining] =useState(route.params.DateOfJoining);
   

    const handleUpdate = () => {
        var EmpId=Id;
        var EmpFirstName=textFirstName;
        var EmpLastName=textLastName;
        var EmpSalary=textSalary;
        var EmpDateOfJoining=textDateOfJoining;
        var EmpAge=textAge;
        var EmpDept=textDept;

        if(EmpId && EmpFirstName && EmpLastName && EmpSalary && EmpDateOfJoining && EmpAge && EmpDept)
        {
           
            var UpdateApiUrl= `http://${ipadress.ip}/api/update.php`;
            console.log("entered here")
            var headers={
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            };
           
            var Data={
                EmpId:EmpId,
                FirstName:EmpFirstName,
                LastName:EmpLastName,
                Dept:EmpDept,
                Doj:EmpDateOfJoining,
                Age:EmpAge,
                Salary:EmpSalary,
            };
            
            var x= JSON.stringify(Data);
            console.log(x);
    
            fetch(UpdateApiUrl,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data)
                })
    
            .then((response)=>response.json())
            .then((responsej)=>
            {
                alert(responsej)
                navigation.navigate('Home');
            }).catch((error)=>{
                console.error(error);
            })
    
        }
        else{
            alert("Missing fields")
        }    
      };
    
      const handleSalaryChange = (text) => {
        // Validate input to allow only numbers

          setTextSalary(text);
        
      };
    
      const handleAgeChange = (text) => {
        // Validate input to allow only numbers
       
          setTextAge(text);
        
      };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ID:</Text>
            <TextInput style={styles.input} value={Id}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput style={styles.input} value={textFirstName} onChangeText={setTextFirstName} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput style={styles.input} value={textLastName} onChangeText={setTextLastName} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Salary:</Text>
            <TextInput style={styles.input} value={textSalary} onChangeText={handleSalaryChange} keyboardType="numeric"
          returnKeyType="done" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Joining:</Text>
            <TextInput style={styles.input} value={textDateOfJoining} onChangeText={setTextDateOfJoining} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age:</Text>
            <TextInput style={styles.input} value={textAge} onChangeText={handleAgeChange} keyboardType="numeric"
          returnKeyType="done" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Department:</Text>
            <TextInput style={styles.input} value={textDept} onChangeText={setTextDept} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#EEEEEE",
        padding: 20,
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 70,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      input: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
      },
      updateButton: {
        backgroundColor: '#0099ff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      updateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default FormScreen;
