import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Card from '../SharedHeader/card'
import {images} from '../Styles/styling'
export default function ReviewDetails({route,navigation}) {
  const {title,rating,body}=route.params;
  const presh=()=>{

     navigation.navigate('Home')
    // navigation.push
    // navigation.goBack()
    }
  return (
    <View style={styles.container}>
      <Card>
    <Text>{title}</Text>
    <Text>{body}</Text>
    <View style={styles.ratings}>
  <Text>Ratings of the Movies </Text>
<Image source={images.ratings[rating]} />
      </View>
    
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
ratings:{

flexDirection:'row',
justifyContent:'center',
paddingTop:16,
marginTop:16,
borderTopWidth:1,
borderTopColor:'coral'

}

});