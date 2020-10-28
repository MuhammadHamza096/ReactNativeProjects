import React from 'react'

import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
export default function VideoComponent({video}) {
    return (
        <View style={styles.Main}>
     <TouchableOpacity>
      <Image style={styles.Images} source={{uri:video.thumbnail}}/>
    <Text style={styles.duration}> {video.duration}</Text>
 
     </TouchableOpacity>
    <View style={{  
paddingTop:8,
paddingHorizontal:10,
display:'flex',
flexDirection:'row',
alignItems:'center'}}>
       <View>
           <Image style={styles.creatorImage} source={{uri:video.creatorImg}}/>
       </View>
        <View style={styles.Viewers}>

    <Text> {video.title}</Text>
    <Text style={{color:'#222'}}> {`${video.creator} • ${video.views} • ${video.uploaded}`}</Text>

    
        </View>
<View style={{alignSelf:'flex-start'}}>
<Feather name="more-vertical" size={24} color="black" />
</View>
</View>
        </View>


    )
}

const styles = StyleSheet.create({
    Main:{
marginTop:10,

    },
   Images: {
   width:'100%',
   height:200,
   resizeMode:'cover',
    },
  duration:{
position:'absolute',
bottom:10,
right:10,
backgroundColor:'#000',
color:'#fff',
paddingHorizontal:4,

  },
bottomView:{
  



  },
creatorImage:{
width:40,
height:40,
borderRadius:100,


  },
  Viewers:{
flex:1,
paddingHorizontal:10,


  }
  });
  