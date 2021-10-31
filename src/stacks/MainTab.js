import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarCustomizado from '../components/TabBarCustomizado';
import Home from '../screens/Home';
import Sistemas from '../screens/Sistemas';
import Perfil from '../screens/Perfil';


const Tab = createBottomTabNavigator();

export default () => (

    <Tab.Navigator tabBar={props=><TabBarCustomizado {...props} />}>
        <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="Sistemas" component={Sistemas} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  
);