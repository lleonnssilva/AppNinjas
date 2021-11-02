import AsyncStorage from '@react-native-community/async-storage';


const BASE_API = 'http://api.sgcp.sp.gov.br/api/v1/';

export default {
    
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    login: async (email, password) => {
        const req = await fetch(`${BASE_API}/usuario/Authentication`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userNameOrEmail:email, password:password})
        });
        const json = await req.json();        
        return json;
    },
    registrar: async (nome, email, senha) => {
        const req = await fetch(`${BASE_API}/account/registrar`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Nome:nome, Email:email, SEnha:senha,Perfil:"cliente"})
        });
        const json = await req.json();        
        return json;
    },
    listarInscricoes: async () => {
        const token = await AsyncStorage.getItem('token');
        let userid = await AsyncStorage.getItem('usuarioId');

        const req = await fetch(`${BASE_API}/inscricao/usuario/${userid}`, {
            method: 'GET',
            headers: new Headers({
                      'Authorization': 'Bearer '+ token, 
                      'Content-Type': 'application/json'
                    })
        });
        const json = await req.json();    
        return json;
    },
    logout: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    pegarIncricao: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/inscricao/${id}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
              'Content-Type': 'application/json'
            })
          });

        const json = await req.json();
        return json;
    },
    pegarInfoPerfil: async () => {
        const token = await AsyncStorage.getItem('token');
        const userid = await AsyncStorage.getItem('usuarioId');
        const req = await fetch(`${BASE_API}/usuario/${userid}`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+ token, 
              'Content-Type': 'application/json'
            })
          });

        const json = await req.json();
        return json;
    },
};