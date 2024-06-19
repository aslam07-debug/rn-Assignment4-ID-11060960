import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Pressable ,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {HomeScreen} from './Home';


const LogIn = ({navigation})=>{
  
  const [name,setName] = useState('');
  const [email,setEmail]= useState('');
  var handleSignUp=()=>{
   return  navigation.navigate('Home',{name,email});
  }
return(
<View style={{left:20}}>


<Text style={styles.Jobizz}>Jobizz</Text>
<View style={{top:100,left:30}}>
 <Text style={{fontWeight:'500',fontSize:26}}>Welcome Back👋</Text>
<Text style={{lineHeight:40,fontSize:10,color:"gray"}}>Let's log in.Apply to jobs! </Text>
</View>

<View style={{height:200, width:300,top:130,left:20,right:-20,display:'flex',justifyContent:'space-between'}}>
<TextInput  
style={styles.InputContainer}
placeholder='Name'
value={name}
onChangeText={setName}
/>
<TextInput  
style={[styles.InputContainer,{marginTop:-12}]}
placeholder='Email'
value={email}
onChangeText={setEmail}
/>

<TouchableOpacity style={[styles.Button,{display:'flex'}]} onPress={handleSignUp} >
   <Text style={{margin:'auto',color:'white'}}> Log in</Text>

</TouchableOpacity>

</View>

<View style={{top:200,width:300,left:30}}>
 <View style={{color:"#AFB0B6",flexDirection: 'row', alignItems: 'center'}}>
  <View style={{color:"#AFB0B6",flex: 1, height: 1, backgroundColor:"#AFB0B6"}} />
  <View>
    <Text style={{color:"#AFB0B6",width: 140, textAlign: 'center'}}>  Or continue with  </Text>
  </View>
  <View style={{color:"#AFB0B6",flex: 1, height: 1, backgroundColor:"#AFB0B6"}} />
 </View>
</View>

<View style={{marginRight:'auto',top:250,width:216,height:52,display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginLeft:70}}>
  <Image source={require('./assets/Apple.png')} />
  <Image source={require('./assets/Google.png')} />
  <Image source={require('./assets/Facebook.png')} />

</View>

<View style={{top:280,width:300,height:50,marginRight:'auto',left:75}}>
  <Text style={{color:'#AFB0B6'}}>Haven't an account? <Text style={{color:'#356899',fontWeight:400,fontSize:14}}>Register</Text></Text>
</View>

</View>



)



}

const styles = StyleSheet.create({
container:{

},
Jobizz:{
  fontVariant:'Poppins',
  fontSize:22,
  color:'#356899',
  fontWeight:'bold',
  top:90,
  left:30,
  lineHeight:30
  
},
InputContainer:{
borderWidth:1,
borderStyle:'solid',
width:300,
left:10,
right:20,
position:'relative',
borderRadius:10,
height:50,
paddingLeft:15,
borderColor:'#AFb0B6'
},
Button:{
height:50,
width:300,
borderWidth:1,
borderStyle:'solid',
borderColor:'#356899',
left:10,
borderRadius:5,
backgroundColor:'#356899',

}






})




export default LogIn;