import React, { useState, useContext,useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
    const [emailField, setEmailField] = useState('25215344809');
    const [passwordField, setPasswordField] = useState('@@Leo2021Sgc');

    const handleSignClick = async () => {
            try {
             if(emailField != '' && passwordField != '') {
                   
                        const response = await  Api.login(emailField,passwordField)
                        if(response.token){
                            var jwtDecode = require('jwt-decode');
                            let jwtClaims = jwtDecode(response.token);
            
                            let usuarioId = jwtClaims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'];
                            
                            await AsyncStorage.setItem('token', response.token);
                            await AsyncStorage.setItem('usuarioId', usuarioId);
                            navigation.reset({
                                routes:[{name:'MainTab'}]
                            });
                        }
                        if(response.errors)
                            alert(`Mensagem: ${response.message} \nCódigo: ${response.code} \nErro: ${response.errors}`);
                        }     
             else {
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