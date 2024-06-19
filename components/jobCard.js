import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const JobCard = ({ Salary, backgroundColor ,companyLogo}) => {
 

  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={{marginLeft:'auto',marginRight:'auto',left:10,display:'flex',flexDirection:'row'}}>
       <View style={{height:40,width:40,backgroundColor:'#fff',right:20,top:7,borderRadius:12,}}>
        <Image source={companyLogo} style={{position:'relative',margin:'auto'}}/>
       </View>
       <View>
        <Text style={styles.cardType}>Software Engineer</Text>
        <Text style={styles.mainType}>Facebook</Text>
        
       </View>
      </View>

      <View style={{display:'flex',flexDirection:'row',alignContent:'space-between',gap:40}}>
        <Text style={styles.cardNumber}>{Salary}</Text>
        <Text style={styles.cardNumber}>Accra,Ghana</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 24,
    padding: 20,
    width: 290,  
    height: 180, 
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 10
  },
  cardType: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5, 
  },
  mainType: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5, 
  },
  cardNumber: {
    color: '#fff',
    fontSize: 13,
    marginTop: 5,  
    letterSpacing: 2,
  }
});

export default JobCard;
