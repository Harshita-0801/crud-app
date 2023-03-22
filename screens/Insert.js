import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import ipadress from '../constants/ipadress';
const FormCard = () => {
  const [employeeId, setEmployeeId] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dept, setDept] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [dateOfJoining, setDateOfJoining] = React.useState('');
  const [age, setAge] = React.useState('');

  const handleSubmit = () => {
    // handle form submission
    if(employeeId && firstName && lastName && dept && salary && dateOfJoining && age )
    {
        var InsertApiUrl= `http://${ipadress.ip}/api/insert.php`;

        var headers={
            'Accept' : 'application/json',
            'Content-Type':'application/json'
        };

        var Data={
            EmpId:employeeId,
            FirstName:firstName,
            LastName:lastName,
            Dept:dept,
            Doj:dateOfJoining,
            Age:age,
            Salary:salary
        };
        
        var x= JSON.stringify(Data);
        console.log(x);

        fetch(InsertApiUrl,
            {
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data)
            })

        .then((response)=>response.json())
        .then((responsej)=>
        {
            alert(responsej)
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
    if (/^\d+$/.test(text) || text === '') {
      setSalary(text);
    }
  };

  const handleAgeChange = (text) => {
    // Validate input to allow only numbers
    if (/^\d+$/.test(text) || text === '') {
      setAge(text);
    }
  };

  const handleIdChange = (text) => {
    // Validate input to allow only numbers
    if (/^\d+$/.test(text) || text === '') {
      setEmployeeId(text);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.card}>
      <View style={styles.form}>
        <Text style={styles.header}> EMPLOYEE DETAILS FORM</Text>
        <TextInput
          style={styles.input}
          value={employeeId}
          onChangeText={handleIdChange}
          placeholder="Employee ID"
          keyboardType="numeric"
          returnKeyType="done"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={dept}
          onChangeText={setDept}
          placeholder="Department"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={salary}
          onChangeText={handleSalaryChange}
          placeholder="Salary"
          keyboardType="numeric"
          returnKeyType="done"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={dateOfJoining}
          onChangeText={setDateOfJoining}
          placeholder="Date of Joining (YYYY-MM-DD)"
          placeholderTextColor={'#666666'}
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={handleAgeChange}
          placeholder="Age"
          keyboardType="numeric"
          returnKeyType="done"
          placeholderTextColor={'#666666'}
          maxLength={2}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#EEEEEE"
    },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 20,
  },
  form: {
    padding: 20,
  },
  header:{
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 20,
    marginTop: 10,
    textAlign:'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize:16
  },
  button: {
    backgroundColor: colors.btnColor,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormCard;
