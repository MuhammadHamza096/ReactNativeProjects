import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MaterialIcons} from '@expo/vector-icons'


export default function Headercomp(props) {
return(

<View style={styles.header}>
    <MaterialIcons name='menu' size={28}  style={styles.icon }/>
<View>
<Text style={styles.headerText}>Game</Text>

</View>

</View>

)



}

const styles=StyleSheet.create({

header :{
width:'100%',
height:50,
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
backgroundColor:'coral'

},

headertext:{
fontWeight:'bold',
fontSize:20,
color:'red',
letterSpacing:1,
padding:'100'


},
icon:{
position:"absolute",
left:16,
top:15

}

})
