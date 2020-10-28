import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard } from 'react-native';
import {globalStyles} from '../Styles/styling'
import Card from '../SharedHeader/card'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './reviewDetails'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'
export default function Home({navigation}) {
  const [modelop,setmodelop] = useState(false)
  const [review, setreview] = useState([
    {title:"Avengers",rating:4,body:'loremIspum',key:'1'},
    {title:"Captain America Civil War",rating:3,body:'loremIspum',key:'2'},
    {title:"Infinity war",rating:5,body:'loremIspum',key:'3'},
    {title:"Tony Stark",rating:5,body:'loremIspum',key:'4'}
     
  
  ])

 const addreviews=(adreview)=>{
  var maxid = 0;
  var maxobj;
  
  review.map(function(obj){   
      
      if (obj.key > maxid) maxobj = obj;    
  });
  review.map((val,index)=>{
   var c=parseInt(val.key)
   var d=parseInt(maxid)
    
if(c>d){
    maxid=c
  
}
    
  })
  // // console.log(myarr);
  // console.log((Math.max(a.keys)+1).toString())
  
  var a= parseInt(maxid)+1
adreview.key=a.toString()
console.log(a)
setreview((prevreview)=>{
return [adreview,...prevreview]


})
setmodelop(false)

 }
  const presh=()=>{

navigation.navigate('ReviewDetails')
// navigation.push('ReviewDetails')
}

  return (
//     <View>
 
//     <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{
//  backgroundColor:'coral'
 
//      }}}>
     
//        <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />
       
//        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{title:'Reviews'}} />
//      </Stack.Navigator>
    

    <View style={globalStyles.container}>
     
    <Modal visible={modelop} animationType='slide'>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
     <View style={styles.mod}>
<MaterialIcons name='close' size={24} onPress={()=>{setmodelop(false)}} style={styles.closeToggle} />
       <ReviewForm addreview={addreviews}/>
     </View>

     </TouchableWithoutFeedback>
    </Modal>
   
<MaterialIcons name='add' size={24} onPress={()=>{setmodelop(true)}} style={styles.openToggle} />

      <FlatList
      data={review}
      renderItem={({item})=>(
       <TouchableOpacity onPress={()=>{navigation.navigate('ReviewDetails',item)}}> 
      <Card>
       <Text style={globalStyles.titletext}>{item.title}</Text>
      </Card>
       </TouchableOpacity>

      )}

      />
      
     
    </View>
    //  </View>
      
  );
}

const styles=StyleSheet.create({

  openToggle:{
marginBottom:10,
borderWidth:1,
borderColor:'#f2f2f2',
padding:10,
borderRadius:10,
alignSelf:'center'


  },
  closeToggle:{

marginTop:20,
marginBottom:0,
borderWidth:1,
borderColor:'#f2f2f2',
padding:10,
borderRadius:10,
alignSelf:'center'

  },
  mod:{

    flex:1
  }



})