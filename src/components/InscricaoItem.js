// import { useNavigation } from '@react-navigation/core';

import React from 'react';
import styled from 'styled-components/native';

const Area = styled.TouchableOpacity`
    background-color: #1C1C1C;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px;
    flex-direction: row;
    border-color:#000000;

`;

const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    
`;

const NomeUsuario = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;

const BotaoPerfil = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const BotaoPerfilText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;


const inscricao =  ({data}) => {

    // const navigation = useNavigation();

    // const handleClick = async() => {

    //     navigation.navigate('Inscricao',{
    //         id:data.id,
    //     });
    // }

    return (
        <Area>
            <InfoArea>
                <NomeUsuario>{data.id}</NomeUsuario>
                <NomeUsuario>{data.nome}</NomeUsuario>
            </InfoArea>
        </Area>
    );
}
export default inscricao;