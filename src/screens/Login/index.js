import React, { useState, useContext,useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    CustomTextConta,
    CustomTextSde,
    SignButtonView
} from './styles';
import Api from '../../services/Api';
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

const LoginScreen = ({ navigation, route }) => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const [loading , setLoading] = useState(false);
    const [emailField, setEmailField] = useState('25215344809');
    const [passwordField, setPasswordField] = useState('@@Leo2021Sgc');

    
    
    const handleSignClick = async () => {
            try {
              

                if(emailField != '' && passwordField != '') {
                    setLoading(true);
                    const response =  await Api.post('usuario/Authentication', {
                        userNameOrEmail:emailField, 
                        password:passwordField
                    });
                    const token = await AsyncStorage.getItem('token');

                    var jwtDecode = require('jwt-decode');
                    let jwtClaims = jwtDecode(response.data.token);
    
                    let usuarioId = jwtClaims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
                    
                    await AsyncStorage.setItem('token', response.data.token);
                    await AsyncStorage.setItem('usuarioId', usuarioId);
    
                    if(response.data.token){
                       navigation.reset({
                        routes:[{name:'MainTab'}]
                       });
                    }  
            } else {
                    alert("Preencha os campos!");
            }
            } catch (error) {
                alert(error);
            }


    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Registrar'}]
        });
    }
    return (
        <Container>  
             <Image
                source={require('../../assets/39821_ninja_icon.png')}
                resizeMode={'contain'}
                style={{height: 25, width: 25,}}/>
            <Image style={{height: 200, width: 200, resizeMode:'contain'}} source={require('../../assets/governo_sp_preto.png')}/>
            <CustomTextConta>ACESSE SUA CONTA</CustomTextConta>
            <InputArea>
                 <SignInput
                    IconSvg={EmailIcon}
                    placeholder="E-mail ou CPF"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                /> 
                <SignButtonView onPress={handleSignClick}>
                <CustomTextSde>Esqueceu a senha?</CustomTextSde>
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton> 
                </SignButtonView>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton> 
        </Container>
    );
}
export default LoginScreen