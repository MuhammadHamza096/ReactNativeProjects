import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function Header(){



    return (
<View style={styles.myheader}>
<Text style={styles.title}>My ToDossss</Text>

</View>


    )
}
const styles = StyleSheet.create({
myheader:{
height:80,
paddingTop:40,
backgroundColor:'coral'

},

title:{
textAlign:'center',
color:'#fff',
fontSize:20,
fontWeight:'bold'

}



})
