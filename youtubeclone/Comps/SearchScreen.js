import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Entypo,MaterialIcons,Ionicons ,AntDesign,Feather,FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Dimensions,TextInput} from 'react-native';


export default function SearchScreen({navigation}) {
    navigation.setOptions({
        title: '',
        headerRight: () => null,
        headerLeft: () => (
          <View
            style={{
              height: 40,
              
              width: Dimensions.get('screen').width * 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 8,
            }}
          >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="md-arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              style={{
                height: 40,
                flex: 1,
                fontSize: 18,
                paddingHorizontal: 10,
              }}
              placeholder='Search'
              autoFocus
            />
            <TouchableOpacity
              style={{ paddingHorizontal: 4 }}>
              <FontAwesome name="search" size={24} color="#444" />
            </TouchableOpacity>
          </View>
        ),
      });
    return (
<View>

    {/* <Text>vhgvhgvhg</Text> */}
</View>
        )

}  