import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const IconeCarregamento = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
export const BackButton  = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
   
`;
export const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    
`;

export const NomeUsuario = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;
export const TituloCurso = styled.Text`
    font-size: 13px;
    color: #000000;
    font-weigth:bold;
    padding-bottom:10px;
`;
export const Area = styled.TouchableOpacity`
    background-color: #1C1C1C;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px;
    flex-direction: row;
    border-color:#000000;

`;
export const BotaoFechar = styled.TouchableOpacity`
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
export const BotaoFecharText  = styled.Text`
font-size: 13px;
color: #ffffff;

`