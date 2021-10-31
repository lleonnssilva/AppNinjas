
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Text } from 'react-native';
import Preload from '../screens/Preload';
import LoginScreen from '../screens/Login';
import Registrar from '../screens/Registrar';
import MainTab from '../stacks/MainTab';
import VRTab from '../stacks/VRTab';
const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Preload"
        onPress={() =>
          navigation.navigate('Preload')
        }
      />
    );
  };

const MyStack = () => {
  return (

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Preload" component={Preload} />

        {/* <Stack.Screen name="Registrar" component={Registrar} /> */}
        <Stack.Screen name="MainTab" component={MainTab} /> 
        <Stack.Screen name="VRTab" component={VRTab} />  
      </Stack.Navigator>
  );
  };

export default MyStack;
