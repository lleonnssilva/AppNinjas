import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation , useRoute} from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import Api from '../../services/Api';

import { 
    Container,
    UsuarioInfoNome,
    BotaoSair,
    BotaoSairText,
    UsuarioInfo

} from './styles';
import  useLocation  from '../../components/Localizacao';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [usuarioInfo , setUsuarioInfo] = useState({});
    const [loading , setLoading] = useState(false);
    const [pefilInfo , setpefilInfo] = useState({});

    const { coords, errorMsg } = useLocation();	
    useEffect(()=>{
    const pegarInfoPerfil = async () =>{
        setLoading(true);
        let userid = await AsyncStorage.getItem('usuarioId');
        let response = await Api.get('usuario/'+ userid);

        if(response.data){
            setUsuarioInfo(response.data);   
            setpefilInfo(response.data.perfil);
            setLoading(false);
        }
       
    }
    pegarInfoPerfil();
    },[]);
    
   
    const handleLogoutClick = async () => {
        
         await AsyncStorage.removeItem('token');
        // await AsyncStorage.removeItem('avatar');
         await AsyncStorage.removeItem('usuarioId');
 
         navigation.reset({
             routes:[{name:'Login'}] 
         });
 
    }
    //"data": {"email": "leoguaruleo@gmail.com", "id": 735285, "idInstituicao": null, "idUnidadeResponsavel": null, "nome": "Leonardo", "nomeCompleto": "Leonardo Leite", "perfil": {"id": 2, "name": "Candidato", "nomeExibicao": "Candidato"}, "sobrenome": "Leite", "userName": "25215344809"},
    return (
        <Container>
                {/* <UsuarioAvatar source={{uri:usuarioInfo.avatar}}/> */}
                <UsuarioInfo>
                 <UsuarioInfoNome>Id: {usuarioInfo.id}</UsuarioInfoNome>
                 <UsuarioInfoNome>Nome: {usuarioInfo.nomeCompleto}</UsuarioInfoNome>
                 <UsuarioInfoNome>UserName: {usuarioInfo.userName}</UsuarioInfoNome>
                 <UsuarioInfoNome>Email: {usuarioInfo.email}</UsuarioInfoNome>
                 <UsuarioInfoNome>Perfil: {pefilInfo.nomeExibicao}</UsuarioInfoNome> 
                 <UsuarioInfoNome>Localização</UsuarioInfoNome> 
                 {coords &&
                 <View>
                    <UsuarioInfoNome>Latitude: {coords.latitude}</UsuarioInfoNome> 
                    <UsuarioInfoNome>Longitude: {coords.longitude}</UsuarioInfoNome> 
                </View>
                }
                
                 
                 <BotaoSair onPress={handleLogoutClick}> 
                    <BotaoSairText>Sair</BotaoSairText>
                 </BotaoSair>
                 </UsuarioInfo>
        </Container>
    );
}