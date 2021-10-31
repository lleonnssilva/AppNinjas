import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Image } from 'react-native';


  const PreloadScreen = ({ navigation, route }) => {

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            console.log('----preload---',token,'-----preload----') 
            await AsyncStorage.removeItem('token');

            
            if(token) {

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
                    // var decode = require('jwt-decode');
                    // const decoded = decode(token);
                    // if (decoded.exp > Date.now() / 1000) {
                    //     console.log('main',decoded.exp , Date.now() / 1000);
                    //     navigation.reset({
                    //         routes:[{name:'MainTab'}]
                    //     });
                    // }
                    // if (decoded.exp < Date.now() / 1000) {
                    //     await AsyncStorage.removeItem('token');
                    //     console.log('login',decoded.exp , Date.now() / 1000);
                    //     navigation.navigate('Login');
                    // }
                    
            } else {
                //navigation.navigate('Login');
                console.log('Sem token')
            }
        }
        console.log('Chektoken');
        checkToken();
    }, []);
    return (
        <Container>
            <Image style={{height: 250, width: 250, resizeMode:'contain'}} source={require('../../assets/governo_sp_preto.png')}/>
            <LoadingIcon size="large" color="#FFFFFF" /> 
        </Container>
   )
  };

  export default PreloadScreen