import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inscricao from '../screens/Vr/Inscricao';
import Home from '../screens/Vr/Home';
import Perfil from '../screens/Perfil';
import TabBarVR from '../components/TabBarVR';


const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator screenOptions={{
        headerShown: false
    }}tabBar={props=><TabBarVR {...props} />}>
        <Tab.Screen name="Inscricao" component={Inscricao} /> 
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />  
    </Tab.Navigator>
  
);