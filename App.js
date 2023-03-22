import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './components/Header';
import Home from './screens/Home';
import Insert from './screens/Insert';
import SearchByDept from './screens/SearchDept';
import SearchByIdCard from './screens/SearchID';
import ListEmp from './screens/ListEmp';
import DeleteEmp from './screens/DeleteEmp';
import FormScreen from './screens/UpdateEmp';
import UpdateSearchEmp from './screens/UpdateSearch';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{header: (props) => <Header title="CRUD APP" {...props}/>}}/>
        <Stack.Screen name="Insert" component={Insert} options={{header: (props) => <Header title="INSERT EMPLOYEE" {...props}/>}}/>
        <Stack.Screen name="SearchId" component={SearchByIdCard}  options={{header: (props) => <Header title="SEARCH EMPLOYEE" {...props}/>}}/>
        <Stack.Screen name="SearchDept" component={SearchByDept}  options={{header: (props) => <Header title="SEARCH EMPLOYEE" {...props}/>}}/>
        <Stack.Screen name="List" component={ListEmp}  options={{header: (props) => <Header title="EMPLOYEE LIST" {...props}/>}}/>
        <Stack.Screen name="Delete" component={DeleteEmp} options={{header: (props) => <Header title="DELETE EMPLOYEE" {...props}/>}}/>
        <Stack.Screen name="Update" component={FormScreen} options={{header: (props) => <Header title="UPDATE EMPLOYEE" {...props}/>}} />
        <Stack.Screen name="UpdateSearch" component={UpdateSearchEmp} options={{header: (props) => <Header title="UPDATE EMPLOYEE" {...props}/>}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
