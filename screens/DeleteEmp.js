import colors from '../constants/colors';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import ipadress from '../constants/ipadress';
const DeleteEmp = ({navigation}) => {
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [deleteResult,setDeleteResult] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const searchById = () => {

        var SearchApiUrl=`http://${ipadress.ip}/api/search_by_id.php`;
        var headers={
            'Accept' : 'application/json',
            'Content-Type':'application/json'
        };
        var Data={
            id:searchId
        };
         
        var x= JSON.stringify(Data);
        console.log(x);

        fetch(
            SearchApiUrl,
            {
              method:'POST',
              headers: headers,
              body: JSON.stringify(Data)
            }
        )
        .then((response)=>response.json())
        .then((responsej)=>
        {
            if(responsej.error)
            {
                alert("NO RECORD FOUND")
            }
            else
            setSearchResult(responsej);

        }).catch((error)=>{
            console.error(error);
        });
    };

    const deleteId = () => {

        var SearchApiUrl=`http://${ipadress.ip}/api/delete.php`;
        var headers={
            'Accept' : 'application/json',
            'Content-Type':'application/json'
        };
        var Data={
            id:searchId
        };
         
        var x= JSON.stringify(Data);
        console.log(x);

        fetch(
            SearchApiUrl,
            {
              method:'POST',
              headers: headers,
              body: JSON.stringify(Data)
            }
        )
        .then((response)=>response.json())
        .then((responsej)=>
        {
            alert(responsej);
            setDeleteResult(responsej);
            navigation.navigate('Home');
        }).catch((error)=>{
            console.error(error);
        });
    };

    const handleDelete = () => {
        // Call deleteId function
        setModalVisible(false);
        deleteId();
      };
    
      const handleCancel = () => {
        setModalVisible(false);
      };
    
    

    return (
        <View>
             <View style={styles.cardContainer}>
            <Text style={styles.cardHeader}>ENTER EMPLOYEE ID</Text>
            <View style={styles.cardBody}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSearchId}
                    value={searchId}
                    placeholder="Enter ID"
                    keyboardType="numeric"
                    placeholderTextColor={'#666666'}
                />
                <TouchableOpacity style={styles.button} onPress={searchById}>
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
        </View>
       
            {searchResult && (
                <View style={styles.employeeDetails}>
                <Text style={styles.detailsTitle}>Employee Details:</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Name:</Text>
                        <Text style={styles.detailsValue}>{`${searchResult[0].FIRST_NAME} ${searchResult[0].LAST_NAME}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Department:</Text>
                        <Text style={styles.detailsValue}>{searchResult[0].DEPT}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Date of Joining:</Text>
                        <Text style={styles.detailsValue}>{searchResult[0].DOJ}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Age:</Text>
                        <Text style={styles.detailsValue}>{searchResult[0].AGE}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Salary:</Text>
                        <Text style={styles.detailsValue}>{searchResult[0].SALARY}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
                <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Do you want to delete?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={{ color: 'red' }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel}>
                <Text style={{ color: 'green' }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
            </View>
            
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 16,
    margin: 30,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: colors.btnColor,
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    employeeDetails: {

        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        padding: 10,
        marginLeft: 20,
        marginRight:20,
    },
    detailsTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    detailsContainer: {
        marginTop: 5,
    },
    detailsRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    detailsLabel: {
        fontWeight: 'bold',
        width: '40%',
        marginRight: 5,
    },
    detailsValue: {
        width: '60%',
    }

});

export default DeleteEmp;
   