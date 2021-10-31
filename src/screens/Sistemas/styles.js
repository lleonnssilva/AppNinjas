import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
    justify-content:center;
    flex-direction:row;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const IconeCarregamento = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const  Avatar = styled.Image`
    width: 100px;
    height: 50px;
    resizeMode:contain;
    
`;


export const Area = styled.TouchableOpacity`
background-color: #1b0d0d;
margin-bottom: 5px;
border-radius: 10px;
padding: 5px;
padding-left: 15px;
height: 60px;
`;
