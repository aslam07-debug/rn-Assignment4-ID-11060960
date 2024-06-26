import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './LogInScreen';
import HomeScreen from './Home';
const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen 
    name="Log In"
    
    component={LogIn}
    options={ {
  headerShown:false,}
    }
    />
    <Stack.Screen 
    name="Home"
    component={HomeScreen}
    options={{headerShown:false}}
    />

  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
