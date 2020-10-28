import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View,TextInput,TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
   <View style={styles.bigcircle}></View>
   <View style={styles.smallcircle}></View>
    <View style={styles.centrazidview}>
       <View style={styles.authBox}>
         <View style={styles.logoBox}>
           <FontAwesome name='comments' size={50} style={styles.logos} />
         </View>
         <Text style={styles.loginTitleText}>Login</Text>
         <View style={styles.hr}></View>
         <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input} autoCapitalize={false} keyboardType='email-address' textContentType="emailAddress"/>
         </View>
         <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input} autoCapitalize={false} secureTextEntry={true} textContentType="password"/>

         </View>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.RegisterText}>Don't have an account? Register Now </Text>
        </TouchableOpacity>
          

        <TouchableOpacity >
          <Text style={styles.forgotPas}>Forgot Password? </Text>
        </TouchableOpacity>
       </View>

    </View>
    
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative'
  
  },
  bigcircle : {
width:Dimensions.get('window').height * 0.7 ,
height:Dimensions.get('window').height *0.7,
backgroundColor:'#ff6b81',
borderRadius:1000,
position:'absolute',
 right:Dimensions.get('window').width * 0.25,
 top:-50,


  },
  smallcircle :{
width:Dimensions.get('window').height * 0.4,
height:Dimensions.get('window').height * 0.4,
backgroundColor:'#ff7979',
borderRadius:1000,
position:'absolute',
bottom:Dimensions.get('window').width * -0.2,
right:Dimensions.get('window').width * -0.3,



  },
  centrazidview:{
   width:'100%',
   
   top:'15%',
  
  },
  authBox : {
    width:'80%',
    
    backgroundColor:'#fafafa',
    borderRadius:20,
    alignSelf:'center',
    paddingHorizontal:14,
    paddingBottom:30,
    shadowColor:'#000',
    shadowOffset:{

      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  logoBox : {
width:100,
height:100,
backgroundColor:'#eb4d4b',
borderRadius:1000,
alignSelf:'center',
display:'flex',
alignItems:'center',
justifyContent:'center',
top:-50,
marginBottom:-50,
shadowColor:'#000',
shadowOffset: {
width:0,
height:1,
},
shadowOpacity:0.2,
shadowRadius:1.41,
elevation:2,

  },

logos:{
color:'white'

},
loginTitleText:{
fontSize:26,
fontWeight:'bold',
marginTop:10,

},
hr:{
width:'100%',
height:0.5,
backgroundColor:'#444',
marginTop:6,


},
inputBox:{

marginTop:10,

},
inputLabel:{
fontSize:18,
marginBottom:6,

},
input :{
width:'100%',
height:40,
backgroundColor:'#dfe4ea',
borderRadius:4,
paddingHorizontal:10,

},

LoginButton:{
backgroundColor:'#ff4757',
marginTop:10,
paddingVertical:10,
borderRadius:4,


},

LoginButtonText:{

color:'#fff',
textAlign:'center',
fontSize:20,
fontWeight:'bold',

},
RegisterText:{
  color:'black',
textAlign:'center',
marginTop:20,
fontSize:13,



},
forgotPas:{
  color:'black',
textAlign:'center',
marginTop:12,
fontSize:13,



}






});
