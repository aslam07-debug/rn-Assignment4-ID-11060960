import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HistoryCard = ({ Salary, companyLogo,location,role }) => {
  return (
<View style={styles.cardContainer}>
   <Image source={companyLogo} style={{top:10,left:10}}/>
   <View style={{left:60,top:-40}}>
     <Text style={{fontWeight:'bold',fontSize:15,top:10}}>{role}</Text>
     <Text style={{top:12,color:'grey'}}>Facebook</Text>
   </View>
   <View style={{top:-80,left:240}}>
    <Text style={{top:10}}>{Salary}</Text>
    <Text  style={{top:12,color:'grey'}}>{location}</Text>
   </View>
  
  
</View>
  );
};

const styles = StyleSheet.create({
  cardContainer:{
    height:74 ,
    width:400, 
    
    

  }
  
});

export default HistoryCard;
