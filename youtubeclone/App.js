import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo,MaterialIcons,Ionicons ,AntDesign,Feather,FontAwesome,   } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import VideoComponent from './Comps/VideoComponent'
import {createStackNavigator} from '@react-navigation/stack'
import SearchScreen from './Comps/SearchScreen'

import ShowHeaderSearch from './Comps/ShowHeaderSearch'
// import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab=createBottomTabNavigator()
const Stack=createStackNavigator()
const Stack1=createStackNavigator()



function Home({navigation}){
  const [homeVideos] = useState([
    {
      title: 'Mirzapur 2 - Release Date Announcement | Amazon Original',
      creator: 'Amazon Prime Video India',
      views: '1 crore views',
      uploaded: '4 days ago',
      creatorImg:
        'https://images-eu.ssl-images-amazon.com/images/I/41mpv9rBhmL.png',
      thumbnail:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/8/24/mirzapur-2.jpg',
      duration: '0:56',
    },
    {
      title: "I'm done with Typescript",
      creator: 'Ben Awad',
      views: '87k views',
      uploaded: '4 months ago',
      creatorImg:
        'https://avatars2.githubusercontent.com/u/7872329?s=460&u=f41fcb80dc9ce32a809caf9a6c4d9bf31c6ae11a&v=4',
      thumbnail: 'https://i.ytimg.com/vi/QVkPCb7MduY/maxresdefault.jpg',
      duration: '4:50',
    },
    {
      title: 'Deno crash course | Building API with Deno',
      creator: 'Hitesh Choudhary',
      views: '20k views',
      uploaded: '3 months ago',
      creatorImg:
        'https://yt3.ggpht.com/a/AATXAJygJrT2cs6jKFWU1uNCF-l85mvX56-emOWcTw=s900-c-k-c0xffffffff-no-rj-mo',
      thumbnail: 'http://i3.ytimg.com/vi/ll-8rtmq2Zc/maxresdefault.jpg',
      duration: '40:28',
    },
    {
      title: '#1 React, Styled Components and CSS',
      creator: 'Tanay Pratap',
      views: '1.9k views',
      uploaded: '3 months ago',
      creatorImg:
        'https://yt3.ggpht.com/a/AGF-l7-RMcYxA6-Qxzp43S3M4eHYc8-qPF8syhNIog=s900-c-k-c0xffffffff-no-rj-mo',
      thumbnail: 'http://i3.ytimg.com/vi/TOYJDi5zisQ/maxresdefault.jpg',
      duration: '41:27',
    }
     
  ]);
  navigation.setOptions({

    headerLeft:()=>( 
      <View
        style={{
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <AntDesign name="youtube" size={24} color="red" />
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 4 }}>
          YouTube
        </Text>
      </View>),title:'',headerRight:()=>(
        <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity style={{marginRight:12}}>
          <Feather name="cast" size={24} color="#444" />
          </TouchableOpacity>
           
          <TouchableOpacity style={{marginRight:12}}>
          <FontAwesome name="video-camera" size={24} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:12}} onPress={()=>{navigation.navigate('SearchScreen')}}>
          <FontAwesome name="search" size={24} color="#444" />
          </TouchableOpacity>
           
          <TouchableOpacity style={{marginRight:12}}>
          <MaterialIcons name="account-circle" size={24} color="#444" />
          </TouchableOpacity>
        </View>
  
      )
  
  })



return(
<ScrollView>

  {homeVideos.map((video)=>(
<VideoComponent video={video}/>

  ))}
  <View style={{height:100}}></View>
</ScrollView>

)



}
function Explore({navigation}){
  navigation.setOptions({

    headerLeft:()=>( 
      <View
        style={{
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <AntDesign name="youtube" size={24} color="red" />
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 4 }}>
          YouTube
        </Text>
      </View>),title:'',headerRight:()=>(
        <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity style={{marginRight:12}}>
          <Feather name="cast" size={24} color="#444" />
          </TouchableOpacity>
           
          <TouchableOpacity style={{marginRight:12}}>
          <FontAwesome name="video-camera" size={24} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:12}} onPress={()=>{navigation.navigate('SearchScreen')}}>
          <FontAwesome name="search" size={24} color="#444" />
          </TouchableOpacity>
           
          <TouchableOpacity style={{marginRight:12}}>
          <MaterialIcons name="account-circle" size={24} color="#444" />
          </TouchableOpacity>
        </View>
  
      )
  
  })

  return(

    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
    
    )

}
function Subscriptions(){
  return(

    <View style={styles.container}>
      <Text>Subscription</Text>
    </View>
    
    )
}
function Notifications(){
  return(

    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
    
    )
}
function Library(){
  return(

    <View style={styles.container}>
      <Text>Library</Text>
    </View>
    
    )
}
function stackna(){
return (
  <Stack.Navigator  >


  <Stack.Screen name="Home" component={Home}/>
  
   <Stack.Screen name="SearchScreen" component={SearchScreen}/>
  
   
   
  </Stack.Navigator>
  


)

}
function stackna1(){
  return (
    <Stack1.Navigator  >
  
  
    <Stack1.Screen name="Home" component={Explore}/>
    
     <Stack1.Screen name="SearchScreen" component={SearchScreen}/>
    
     
     
    </Stack1.Navigator>
    
  
  
  )
  
  }
  


// function ShowHeaderSearch() {
  // navigation.setOptions({
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
  //       <TouchableOpacity
  //         onPress={() => {
  //           showNormalHeader();
  //         }}
  //       >
  //         <FontAwesome name="search" size={24} color="#444" />
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
  //         onPress={() => {
  //           showNormalHeader();
  //         }}
  //       >
  //         <FontAwesome name="search" size={24} color="#444" />
  //       </TouchableOpacity>
  //     </View>
  //   ),
  // });
// }
  // return(
    // <View style={{ width:'100%',height:800,backgroundColor:'red'}}>

    //   <Text>jfhgvvjh</Text>
    // </View>
  //   <Stack1.Navigator screenOptions={{        
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
  //       <TouchableOpacity
  //         onPress={() => {
  //           stackna();
  //         }}
  //       >
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
  //         onPress={() => {
  //           stackna();
  //         }}
  //       >
  //          <FontAwesome name="search" size={24} color="#444" />
  //       </TouchableOpacity>
  //     </View>
  //   )}}>
  //  <Stack1.Screen name="Home" component={Home}/>
  // </Stack1.Navigator>

  // )
// }

export default function App() {
  
  
  return (
  <NavigationContainer>
   <Tab.Navigator tabBarOptions={{
     activeTintColor:'red',
     inactiveTintColor:'#555',

   }}>
     <Tab.Screen name='Home' component={stackna} options={{
       tabBarIcon:({color,size})=><Entypo name="home" size={24} color={color} />
     }}  />
     
     <Tab.Screen name="Explore" component={stackna1}  options={{
       tabBarIcon:({color,size})=><MaterialIcons name="explore" size={24} color={color} /> 
     }}  />
     
     <Tab.Screen name="Subscriptions" component={Subscriptions} options={{
       tabBarIcon:({color,size})=><MaterialIcons name="subscriptions" size={24} color={color} /> 
     }}  />
    
     <Tab.Screen name="Notifications" component={Notifications} options={{
       tabBarIcon:({color,size})=><Ionicons name="ios-notifications" size={24} color={color} /> 
     }}  />
     
     <Tab.Screen name="Library" component={Library} options={{
       tabBarIcon:({color,size})=><MaterialIcons name="video-library" size={24} color={color} /> 
     }}  />
  
          

   </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
