import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
export default function Header({item,pressHandler}){


return(
<TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
    <View style={styles.mytitle}>
<MaterialIcons name='delete' size={18} color='#333'/>
<Text style={styles.itemText}>

{item.text}

</Text>
</View>
</TouchableOpacity>


)

}

const styles = StyleSheet.create({


mytitle :{

padding:16,
marginTop:16,
borderColor:'#bbb',
borderWidth:1,
borderStyle:'dashed',
borderRadius:10,
flexDirection:'row'

},
itemText :{

   marginLeft:10, 
}

}
    
    )