import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';


export default function logomaking(){

    return(
     
    <View style={styles.container}>
    
    <Image source={require('../assets/sir.jpg')} style={styles.logoIm} />
    <Text style={styles.mytext}>Film ZoNe</Text>
    </View>
    
  
    
    
    )
    }
    const styles=StyleSheet.create({
      container:{
   flexDirection:'row'


      },
      mytext:{
     color:'#fff',
     lineHeight:50,
     marginHorizontal:16,
     fontSize:20,
     fontWeight:"bold"

      },
        logoIm:{
            width:35,
            height:35,
            marginTop:10,
                }



    })
