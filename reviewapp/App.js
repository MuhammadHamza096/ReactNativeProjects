import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './Screens/home'
import About from './Screens/about'
import ReviewDetails from './Screens/reviewDetails'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
// import Navigator from './routes/homestack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Headercomp from './SharedHeader/headercomp'
import {MaterialIcons} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import Logomaking from './Screens/logomaking'
import Backimg from './Screens/backimg'
// const getFonts=()=>{

//   return Font.loadAsync({

//     'nunito-regular':require('./assets/Fontsa/Nunito-Regular.ttf'),
//     'nunito-bold':require('./assets/Fontsa/Nunito-Bold.ttf')
//   })
// }

const Drawer=createDrawerNavigator();
const Stack = createStackNavigator();
const Aboutstack=createStackNavigator();


function DrawerRoutes({navigation}){

  return(
  
<Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'green'},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}}  >
     
       <Stack.Screen name="Home" component={Home} options={{title:'Home',headerTitle:props=><Logomaking {...props}  />,headerLeft:()=>( <MaterialIcons name='menu' style={styles.icon} size={28} onPress={()=>{navigation.openDrawer()}}/>)}} />
       
       <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{title:'Details'}}  />
     </Stack.Navigator>

  )

} 
function AboutRoutes(){

  return(
  
<Stack.Navigator  screenOptions={{headerStyle:{backgroundColor:'coral'},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'bold'},headerTitleAlign:'center'}} >
     
       <Stack.Screen name="About" component={About}  />
       
       
     </Stack.Navigator>

  )

} 


export default function App() {
  // const [fontsloaded, setfontsloaded] = useState(false)
  // if(fontsloaded){
  return (
   
    <NavigationContainer>
        <Drawer.Navigator >
  <Drawer.Screen name='Home' component={DrawerRoutes}  />
  <Drawer.Screen name='About' component={AboutRoutes}  />



</Drawer.Navigator>
    </NavigationContainer>
   

   


  
   
  );

}


const styles=StyleSheet.create({

  icon:{
    position:"absolute",
    left:16,
    top:15,
   color:'white'
    },


})
