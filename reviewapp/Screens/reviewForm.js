import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,FlatList,TouchableOpacity,Modal } from 'react-native';
import {globalStyles} from '../Styles/styling'
import {Formik} from  'formik'
import * as yup from 'yup'




import { TextInput } from 'react-native-gesture-handler';

const reviewSchema=yup.object({
title:yup.string().required(),
body:yup.string().required(),
rating:yup.string().required().test('is num 1-5','Rating must be 1-5' ,(val)=>{
    return parseInt(val)<6 && parseInt(val)>0
})

})
export default function ReviewForm({addreview}) {

return(

<View style={globalStyles.container}>
<Formik
initialValues={{title:'',body:'',rating:''}}
validationSchema={reviewSchema}
onSubmit={(values,actions)=>{
actions.resetForm()
    addreview(values)

     
}}
>
    {(props)=>(
<View>
<TextInput style={globalStyles.input} placeholder='Review title' onChangeText={props.handleChange('title')} value={props.values.title}/>
<TextInput multiline style={globalStyles.input} placeholder='Review Body' onChangeText={props.handleChange('body')} value={props.values.body} />
<TextInput  style={globalStyles.input} placeholder='Review Rating(1-5)' onChangeText={props.handleChange('rating')} value={props.values.rating} keyboardType='numeric'/>
<Button title='submit' color='maroon' onPress={props.handleSubmit} />





</View>


    )}


    



    


</Formik>


</View>

)




}

// const styles=StyleSheet.create({

//     container:{


//     }


// })