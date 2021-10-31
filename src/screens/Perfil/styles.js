import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#ffffff;

`;

export const Scroller = styled.ScrollView`
    flex:1;
`;

export const FakeSwiper = styled.View`
    height:140px;
    background-color:#63C2D1;
`;

export const PaginaConteudo = styled.View`
    background-color:#000000;
    border-top-left-radius:50px;
    margin-top:-50px;
    min-height:400px;
`;

export const UsuarioInfoArea = styled.View`
    flex-direction: row;
    margin-top:-30px;
`;




export const SwipeDot  = styled.View`
    width: 10px;
    height:10px;
    background-color:#000000;
    border-radius:5px;
    margin:3px;
`;

export const SwipeDotActive  = styled.View`
    width: 10px;
    height:10px;
    background-color:#000000;
    border-radius:5px;
    margin:3px;
`;

export const SwipeItem  = styled.View`
    flex:1;
    background-color:#63C2D1;
`;

export const SwipeImage  = styled.Image`
    width: 100%;
    height:240px;;
`;
export const PerfilItem  = styled.View`
    flex:1;
    background-color:#63C2D1;
    background-color:#ffffff;
    background-color: #000000;
    border: 2px solid #999999;
    border-radius: 20px;
    width:100px;
    height:100px;
`;


export const BotaoFavorito  = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #000000;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right :20px;
`;


export const UsuarioInfo  = styled.View`
    flex:1;
    
    margin-top: 20px;
    margin-left: 20px;
    margin-right :20px; 
    height:100px;
`;

export const UsuarioInfoNome  = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 30px;
    margin-right: 20px;

`;

export const UsuarioAvatar  = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 1px;
    border-color: #000000;
`;

export const BackButton  = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;

`;



export const LoadingIcon  = styled.ActivityIndicator`

    margin-top: 50px;
`;



export const ServicoArea = styled.View`
    margin-top: 20px;
`;

export const ServicoItem = styled.View`

    flex-direction: row;
    margin-left : 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;


export const ServicoInfo  = styled.View`

    flex:1;
`;

export const ServicoNome  = styled.Text`

    font-size: 16px;
    font-weight: bold;
    color: #268596;
`;

export const ServicoPreco  = styled.Text`

    font-size: 14px;
    color: #268596;
`;

export const BotaoSair = styled.TouchableOpacity`

width: 90px;
height: 40px;
background-color: #000000;
border: 1px solid #999999;
border-radius: 20px;
justify-content: center;
align-items: center;
margin-top: 20px;
margin-left: 20px;
margin-right :20px;
`;

export const AgendarServicoTexto   = styled.Text`

     font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
`;


export const ServicoTitulo  = styled.Text`

    font-size: 18px;
    color: #268596;
    font-weight: bold;
    font-weight: bold;
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom:20px;


`;



export const DepoimentoArea = styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const DepoimentolItem  = styled.View`

    background-color: #268596;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;


`;

export const DepoimentolInfo  = styled.View`

    flex-direction: row;
    justify-content: space-between;
 


`;
export const DepoimentolNome  = styled.Text`

    font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const BotaoSairText  = styled.Text`

font-size: 13px;
color: #ffffff;

`