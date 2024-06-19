import { NavigationContainer } from '@react-navigation/native';

import { Header, createStackNavigator } from '@react-navigation/stack';



import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button, Pressable ,Image, FlatList} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import JobCard from './components/jobCard';
import HistoryCard from './components/HistoryCard';
const HomeScreen=({route})=>{
  const cardData = [
    { id: '1', Salary: '$186,000', backgroundColor: '#1a73e8', companyLogo: require('./assets/Facebook.png') },
    { id: '2',Salary: '$180,000', backgroundColor: '#c2185b', companyLogo: require('./assets/Google.png') },
    { id: '3',Salary: '$196,000', backgroundColor: '#00796b', companyLogo: require('./assets/Apple.png') },
    { id: '4',Salary: '$160,000', backgroundColor: '#5d4037' , companyLogo: require('./assets/Facebook.png')},
    { id: '5', Salary: '$176,000', backgroundColor: '#7b1fa2', companyLogo: require('./assets/Facebook.png') },
    { id: '6', Salary: '$76,000', backgroundColor: '#303f9f', companyLogo: require('./assets/Facebook.png') },
    { id: '7', Salary: '$86,000', backgroundColor: '#0288d1', companyLogo: require('./assets/Facebook.png') },
    { id: '8', Salary: '$136,000', backgroundColor: '#c2185b', companyLogo: require('./assets/Facebook.png')},
  ];
  const activitiesData = [
    { id: '1', Salary: '$186,000',  companyLogo: require('./assets/facebookPopular.png'), location:"Los Angeles,US", role: "Project Manager" ,company:"Facebook"},
    { id: '2',Salary: '$86,000',  companyLogo: require('./assets/burger-king-4 1.png'), location:"Florida,US" ,role:"Jr Executive",company: "Burger King"},
    { id: '3',Salary: '$106,000', companyLogo: require('./assets/beats.png') , location:"San Diego,US",role:"Software Engineer", company:"Beats Inc"},
    { id: '4',Salary: '$96,000',  companyLogo: require('./assets/facebookPopular.png'), location:"Tamale,GH",role: "Project Manager", company:"Facebook",},
    { id: '5', Salary: '$100,000',  companyLogo: require('./assets/Facebook.png'), location:"Accra,GH",role: "Project Manager",company:"Facebook" },
    { id: '6', Salary: '$110,000', companyLogo: require('./assets/Facebook.png') , location:"New York,US",role:"Jr Executive",company:"Facebook"},
    { id: '7', Salary: '$120,000',  companyLogo: require('./assets/Facebook.png'), location:"London,UK" , role: "Project Manager" ,company:"Facebook"},
    { id: '8', Salary: '$121,000',  companyLogo: require('./assets/burger-king-4 1.png'), location:"Astana,KZ",role:"Jr Executive",company: "Burger King" },
    { id: '9', Salary: '$103,000',  companyLogo: require('./assets/Facebook.png'), location:"Los Angeles,US", role: "Project Manager" ,company:"Facebook"},
    { id: '10', Salary: '$110,000',  companyLogo: require('./assets/Facebook.png'), location:"Munich,Ger", role: "Project Manager" ,company:"Facebook"},
    { id: '11', Salary: '$186,000',  companyLogo: require('./assets/Facebook.png'), location:"Berlin,Ger", role: "Project Manager" ,company:"Facebook"},
    { id: '12', Salary: '$186,000',  companyLogo: require('./assets/Facebook.png'), location:"Los Angeles,US", role: "Project Manager" ,company:"Facebook"},
  ];
   const {email,name} = route.params;
  return(
<View style={styles.container}>
 <View style={styles.profileHead}>
   <View style={{display:'flex',flexDirection:'column'}}>
   <Text style={{fontWeight:'bold',fontSize:16}}>{name}</Text>
   <Text style={{color:'grey'}}>{email}</Text>
   </View>
  <Image source={require('./assets/profileRound.png')} style={{left:70}} />
 </View>

 <View style={{top:20,left:25,display:'flex',flexDirection:'row'}}>
  <TextInput 
  placeholder='Search a job or Poosition'
  style={styles.searchBox}
  />
  <Icon name="search" size={20} color="grey" style={{top:115,left:15,position:'absolute'}} />


  <View style={{height:48,width:48,top:100,left:20,borderRadius:12,backgroundColor:'#F2F2F3'}}>
   <Image source={require('./assets/filter.5.png')} style={{position:'relative',margin:'auto'}}/>
   </View>
 </View>

 <View style={{top:160,left:25}}>
   <View style={{display:'flex',flexDirection:'row',alignContent:'space-between',gap:190}}>
     <Text style={{fontWeight:'bold',fontSize:18}}>Featured Jobs</Text>
     <Text style={{color:'grey'}}>See all</Text>
   </View>
   <View style={{top:30}}>
   <FlatList 
   
   data={cardData}
   horizontal
   showsHorizontalScrollIndicator={false}
   renderItem={({item})=>(
    <JobCard Salary={item.Salary} backgroundColor={item.backgroundColor} companyLogo={item.companyLogo}  />
  )}
  keyExtractor={(item)=>{
    return( item.id)
  }}
   />
   </View>

  </View>

  <View style={{top:220,left:25}}>
   <View style={{display:'flex',flexDirection:'row',alignContent:'space-between',gap:190}}>
     <Text style={{fontWeight:'bold',fontSize:18}}>Popular Jobs</Text>
     <Text style={{color:'grey'}}>See all</Text>
   </View>
   <View style={{top:30}}>
   <FlatList 
   
   data={activitiesData}
   
   renderItem={({item})=>(
    <HistoryCard Salary={item.Salary}  companyLogo={item.companyLogo} location={item.location} role={item.role} company={item.company}  />
  )}
  keyExtractor={(item)=>{
    return( item.id)
  }}
   />
   </View>

  </View>

   
 



</View>
  
  
  );
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
 backgroundColor:'#FAFAFD'
    },
    profileHead:{
      top:70,
      display:'flex',
      flexDirection:'row',
      left:25
    },
    searchBox:{
      top:100,
      paddingLeft:40,
      backgroundColor:'#F2F2F3',
      height:48,
      width:263,
      borderRadius:12
      
    }
    

  }
)


export default HomeScreen;