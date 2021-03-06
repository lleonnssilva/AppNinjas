import React,{ useState,useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation , useRoute} from '@react-navigation/native';
import Api from '../../services/Api';
import MapboxGL from "@react-native-mapbox-gl/maps";
import envs from '../../config/env'



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
    const [coordernada , setCoordernada] = useState();
    const { coords, errorMsg } = useLocation();	
    const {TOKEN_MAP_URL}  = envs;
    MapboxGL.setAccessToken(TOKEN_MAP_URL);
    useEffect(()=>{
       
        if(coords){
            setCoordernada([coords.longitude,coords.latitude]);
            console.log(coords);
        }
    },[coords]);
    
    useEffect(()=>{
        const pegarInfoPerfil = async () =>{
        setLoading(true);
        let response = await Api.pegarInfoPerfil();
        if(response){
            setUsuarioInfo(response);   
            setpefilInfo(response.perfil);
            setLoading(false);
        }
    }
    pegarInfoPerfil();
    },[]);

    const handleLogoutClick = async () => {
        
         await AsyncStorage.removeItem('token');
         await AsyncStorage.removeItem('usuarioId');
 
         navigation.reset({
             routes:[{name:'Login'}] 
         });
 
    }
     return (
        <Container>
                
                <UsuarioInfo> 
            
                 <BotaoSair onPress={handleLogoutClick}> 
                    <BotaoSairText>Sair</BotaoSairText>
                 </BotaoSair>
                 <UsuarioInfoNome>Id: {usuarioInfo.id}</UsuarioInfoNome>
                 <UsuarioInfoNome>Nome: {usuarioInfo.nomeCompleto}</UsuarioInfoNome>
                 <UsuarioInfoNome>UserName: {usuarioInfo.userName}</UsuarioInfoNome>
                 <UsuarioInfoNome>Email: {usuarioInfo.email}</UsuarioInfoNome>
                 <UsuarioInfoNome>Perfil: {pefilInfo.nomeExibicao}</UsuarioInfoNome> 
                 <UsuarioInfoNome>Localiza????o</UsuarioInfoNome> 
                 {coords &&
                 <View>
                   <UsuarioInfoNome>Longitude: {coords.longitude}</UsuarioInfoNome>  
                   <UsuarioInfoNome>Latitude: {coords.latitude}</UsuarioInfoNome> 
                 </View> 
                }
                {coordernada &&
                <MapboxGL.MapView style={{ flex:1}}styleURL={MapboxGL.StyleURL.light}>
                    <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={coordernada}
                    />
                    <MapboxGL.PointAnnotation
                            coordinate={coordernada}>
                                    <View
                                    style={{
                                        flex:1,
                                            height: 30, 
                                            width: 30, 
                                            backgroundColor: '#ffffff', 
                                            borderRadius: 50, 
                                            borderColor: '#1C1C1C', 
                                            borderWidth: 2
                                            }} >
                                                
                                            </View> 
                                            {/* <View>
                                            <Image
                                                    source={require('../../assets/39821_ninja_icon.png')}
                                                    resizeMode={'contain'}
                                                    style={{height: 25, width: 25,tintColor: '#ffffff'}}/>
                                                     </View> */}
                                                         
            
     
 
                    </MapboxGL.PointAnnotation>                   
                </MapboxGL.MapView>
            }
                 </UsuarioInfo>
 


        </Container>
    );
}