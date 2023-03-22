import colors from '../constants/colors';
import React,  { useEffect , useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ipadress from '../constants/ipadress';
const ListEmp = () => 
{
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        var SearchApiUrl=`http://${ipadress.ip}/api/select.php`;
        fetch(
            SearchApiUrl,
        )
        .then((response)=>response.json())
        .then((responsej)=>
        {  
           setSearchResult(responsej);

        }).catch((error)=>{
            console.error(error);
        });
    });
return (
    <View>
   {searchResult && 
   (
<FlatList 
    data={searchResult}
    renderItem={({item}) =>
    (
        
        <View style={styles.employeeDetails}>
                <Text style={styles.detailsTitle}>Employee Details:</Text>
                <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>ID:</Text>
                        <Text style={styles.detailsValue}>{`${item.EMP_ID}`}</Text>
                </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Name:</Text>
                        <Text style={styles.detailsValue}>{`${item.FIRST_NAME} ${item.LAST_NAME}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsLabel}>Department:</Text>
                        <Text style={styles.detailsValue}>{`${item.DEPT}`}</Text>
                    </View>
                </View>
            </View>
           
         
        )
    }
        contentContainerStyle={styles.container}
    />
    
)}
    </View>
    );
};
       
const styles = StyleSheet.create({
    container: {
        paddingBottom:20,
        paddingTop:50,
        backgroundColor:"#EEEEEE"
      },
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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10, // added marginBottom to create space between list items
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
  },
  contentContainer: {
    marginTop:150
  }

});

export default ListEmp;