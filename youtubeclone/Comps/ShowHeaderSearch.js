import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo,MaterialIcons,Ionicons ,AntDesign,Feather,FontAwesome,   } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'


export default function ShowHeaderSearch(){

    return(
      //   <Stack.Navigator screenOptions={{        
      //   title: '',
      //   headerRight: () => null,
      //   headerLeft: () => (
      //     <View
      //       style={{
      //         height: 40,
      //         width: Dimensions.get('screen').width * 1,
      //         display: 'flex',
      //         flexDirection: 'row',
      //         alignItems: 'center',
      //         paddingHorizontal: 8,
      //       }}
      //     >
      //       <TouchableOpacity>
      //        <MaterialIcons name="arrow-back" size={24} color="black" />
      //       </TouchableOpacity>
      //       <TextInput
      //         style={{
      //           height: 40,
      //           flex: 1,
      //           fontSize: 18,
      //           paddingHorizontal: 10,
      //         }}
      //         placeholder='Search'
      //         autoFocus
      //       />
      //       <TouchableOpacity
      //         style={{ paddingHorizontal: 4 }}
      //       >
      //          <FontAwesome name="search" size={24} color="#444" />
      //       </TouchableOpacity>
      //     </View>
      //   )}}>
      //  <Stack.Screen name="Home" component={Home}/>
      // </Stack.Navigator>
    <View style={{backgroundColor:'red',width:'100%',height:800}}>
      <Text>sfhbsfbsj</Text>
    </View>
      )
    

}