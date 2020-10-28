import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './myComp/header'
import Createlist from './myComp/createlist'
import AddTodo from './myComp/AddTodo'

export default function App() {

const [Items, setItems] = useState([
  {text:'Buy Coffe',key:'1'},
  {text:'Buy Snacks',key:'2'},
  {text:'Buy coffins',key:'3'},
 
  
])
  const deleteitem=(key)=>{

    setItems((prevState)=>{

 return prevState.filter(mykey=>mykey.key!=key)

    })

  }

  const AddItem=(text)=>{
    var maxid = 0;
    var maxobj;
    
    Items.map(function(obj){     
        if (obj.key > maxid) maxobj = obj;    
    });
    // // console.log(myarr);
    // console.log((Math.max(a.keys)+1).toString())
    
    var a= parseInt(maxobj.key)+1
    if(text.length>3){
    setItems((prevState)=>{

      return [...prevState,{text:text,key:a.toString()}]
     
         })
        }
        else{
Alert.alert("OOPS","Characters must be greater than 3",[{text:'Ok',onPress:()=>console.log('alert closed')}])

        }
  }
  return (

    <TouchableWithoutFeedback onPress={()=>{

Keyboard.dismiss()

    }}>
    <View style={styles.container}>
      


<Header/>
<View style={styles.mycontent}>
<AddTodo submitHandler={ AddItem} />
      <View style={styles.mylist}>
      <FlatList 
      data={Items}
      renderItem={({item})=>(
<Createlist item={item} pressHandler={deleteitem} />

      )}
      />
</View>
    </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  mytext :{
    padding:20,
textAlign:"left",

  },
  mylist :{

marginTop:20,

flex:1

  },
  mycontent:{
 
    flex:1,
    padding:40,
  },
});
