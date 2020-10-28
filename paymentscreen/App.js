import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image, Alert, TextInput } from 'react-native';
import { FontAwesome,Entypo } from '@expo/vector-icons'; 
import {Radio} from 'native-base'
import Mouse from './assets/wiredmouse.png'
import Pods from './assets/airpods.png'



export default function App() {
    const [cart, setcart] = useState([{
  id:'PID000101',
  name:'Wired Mouse',
  company:'Logitech',
  img:require('./assets/wiredmouse.png'),
  // 'https://images-eu.ssl-images-amazon.com/images/I/411jXtQp3jL._SX300_QL70_ML2_.jpg',
  quantity:1,
  price:299,
  perPrice:299,

    },
    {
      id:'PID000102',
      name:'Airpods',
      company:'Apple',
      img:require('./assets/airpods.png'),
      quantity:1,
      price:13999,
      perPrice:13999,

    },

  ]);
 const [ShippingMethod,SetShippingMethod] = useState('Normal')
  return (
    <View style={styles.container}>
    <View style={styles.header}>
     <TouchableOpacity style={styles.firsttouch}>
     <FontAwesome name="angle-left" size={24} color="#fff" />

     </TouchableOpacity>

    </View>
    <Text style={styles.paymentTitle}>Payment</Text>
    <View style={styles.cartContainer}>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartTitleView}>
        <Entypo name="shopping-cart" size={24} color="black" />
        <Text style={styles.cartTitle}>My Cart</Text>
        </View>
         
          { cart.length > 0 ? (
          <View>
            { cart
              .sort((a,b)=> a.name > b.name)
               .map((product)=>(
                  <View style={styles.productView}>
                   <Image style={styles.productImage} source={product.img} />
                   <View style={styles.productMiddleView}>
                   <Text style={styles.productTitle}>{product.name}</Text>
                   <Text style={styles.productCompanyTitle}>{product.company}</Text>

                   </View>

                   <View style={styles.productRightView}>
               <Text style={styles.productPriceText}>{`₹${product.price}`}</Text>
               <View style={styles.productItemCounterView}>
                 <TouchableOpacity onPress={()=>{
                   if(product.quantity===1){
                     return Alert.alert(`Remove ${product.name}?`,'',[{text:'Cancel'},{text:'Remove',onPress:()=>{const newCart=cart.filter((p)=> p.id !==product.id)
                   setcart(newCart);

                    },
                  },
                  ]
                  )
                   }
                   const newProd={ ...product,quantity:product.quantity-1,price:product.price-product.perPrice}
                   const restProd=cart.filter((p)=>p.id!==product.id)
                   setcart([...restProd,newProd])
                 }}>
                <FontAwesome name="minus-circle" style={styles.toggleCounterButton} size={24} color="black" />
                 </TouchableOpacity>
                <Text style={styles.counterValue}>{product.quantity}</Text>

                <TouchableOpacity onPress={()=>{
                 
                   const newProd={ ...product,quantity:product.quantity+1,price:product.price+product.perPrice}
                   const restProd=cart.filter((p)=>p.id!==product.id)
                   setcart([...restProd,newProd])
                 }}>
                <FontAwesome name="plus-circle" style={styles.toggleCounterButton} size={24} color="black" />
                 </TouchableOpacity>


               </View>

                   </View>


                  </View>

                  ))
            }
            <View style={styles.couponInputView}>
              <TextInput placeholder='Coupon Code' style={styles.couponInput} />
              <TouchableOpacity>
                 <Text style={styles.couponButton}>Apply Coupon</Text>
                 
              </TouchableOpacity>
            </View>
             <View style={styles.subTotalView}>
               <Text style={styles.subtotalText}>SubTotal -</Text>
               <Text style={styles.subTotalPrice}>
               ₹{cart.reduce((acc,val)=>val.price+acc,0)}
               </Text>
             </View>
             <View style={styles.shippingView}>
               <Text style={styles.shippingText}>Shipping -</Text>
             <View style={styles.shippingItemsView}>
               <TouchableOpacity style={styles.shippingItem} onPress={()=>{
                 SetShippingMethod('Normal')

               }}>
                     <Text style={styles.shippingItemText}>Normal (Free)</Text>
                     <Radio selected={ShippingMethod=='Normal'}/>

               </TouchableOpacity>
               <TouchableOpacity style={styles.shippingItem} onPress={()=>{
                 SetShippingMethod('Express')

               }}>
                     <Text style={styles.shippingItemText}>Express (₹60)</Text>
                     <Radio selected={ShippingMethod=='Express'}/>

               </TouchableOpacity>
             </View>
             </View>
             <View style={styles.totalView}>
               <Text style={styles.TotalText}>Total -</Text>
               {ShippingMethod==='Normal' ? (
                 <Text style={styles.totalPrice}>
                    ₹{cart.reduce((acc,val)=>val.price+acc,0)}
                 </Text>

               ) : (
                <Text style={styles.totalPrice}>
                ₹{cart.reduce((acc,val)=>val.price+acc,0)+60}
             </Text>
               ) }

             </View>
             <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
          </View>
           ) : (
            <View>
              <Text >Your cart is empty.</Text>
            </View>
           )}


        </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop:40,
  },
  header :{
 alignItems:'flex-start',
 marginTop:10,
 paddingHorizontal:20


  },
  firsttouch:{
paddingRight:10,



  },

  paymentTitle:{

    fontSize:30,
    fontWeight:'900',
    color:'#fff',
    marginVertical:12,
    paddingHorizontal:20,
  },
  cartContainer:{
flex:1,
backgroundColor:'white',
marginTop:10,
borderTopLeftRadius:40,
borderTopRightRadius:40,
paddingTop:30,
paddingHorizontal:16,
shadowColor:'#333',
shadowOffset:{
  width:0,
  height:3,
},
shadowOpacity:0.5,
shadowRadius:8,
elevation:6,

  },
  cartTitleView:{

    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  cartTitle:{
fontSize:26,
fontWeight:'700',
marginLeft:10,

  },
  productView:{
display:'flex',
flexDirection:'row',
backgroundColor:'#fff',
paddingVertical:6,
paddingHorizontal:8,
shadowColor:'#333',
shadowOffset:{
width:0,
height:1,


},
shadowOpacity:0.2,
elevation:2,
marginTop:14,

  },
  productImage : {
 width:60,
 height:60,
 alignSelf:'center',


  },
  productMiddleView:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    paddingHorizontal:10,
    justifyContent:'center',
  },
  productTitle:{
  fontSize:20,
  fontWeight:'500',

  },
  productCompanyTitle:{
fontSize:16,
fontWeight:'300',

  },
  productRightView:{
alignItems:'center',
justifyContent:'center',


  },
  productItemCounterView:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-around',
   marginTop:4,

  },
  counterValue:{
      fontSize:20,
      fontWeight:'500'
  },
  productPriceText:{
    alignSelf:'flex-end',
    paddingRight:10,
    fontSize:20,
    fontWeight:'700',
  },
  toggleCounterButton:{

    paddingHorizontal:10,
  },
  couponInputView:{
   width:'100%',
   height:50,
   borderWidth:1,
   borderColor:'#333',
   marginTop:20,
   display:'flex',
   flexDirection:'row',


  },
  couponInput:{
    flex:1,
    fontSize:20,
    paddingHorizontal:10,
  },
  couponButton:{
backgroundColor:'#333',
paddingHorizontal:12,
justifyContent:'center',

padding:15,
color:'#fff',
fontWeight:'bold'

  },


subTotalView:{
display:'flex',
flexDirection:'row',
marginTop:40,
justifyContent:'space-between',
paddingBottom:10,
borderBottomColor:'#333',
borderBottomWidth:1

},
subtotalText:{
  fontSize:18,
  fontWeight:'bold'
},
subTotalPrice:{
  fontSize:18,
  fontWeight:'bold'

},
shippingView:{
  display:'flex',
  flexDirection:'column',
  marginTop:20,
  paddingBottom:10,
  borderBottomColor:'#333',
  borderBottomWidth:1,
},
shippingItemsView:{
  marginTop:10
},
shippingText:{
  fontSize:18,
  fontWeight:'500',
},
shippingItem:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
},
shippingItemText:{
fontSize:16,
paddingVertical:4,
fontWeight:'300',

},
totalView:{
display:'flex',
flexDirection:'row',
marginTop:20,
justifyContent:'space-between',
paddingBottom:10,
borderBottomWidth:1,
borderBottomColor:'#333',



},
TotalText:{
fontSize:18,
fontWeight:'bold',


},
totalPrice:{
fontSize:18,
fontWeight:'bold'

},
checkoutButton:{
backgroundColor:'#333',
paddingVertical:14,
marginTop:30,
alignItems:'center',


},
checkoutButtonText:{
fontSize:18,
color:'#fff',
fontWeight:'700'

}

  

});
