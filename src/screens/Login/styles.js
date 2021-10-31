import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: transparent;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: green;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    width:100px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
`;
export const SignButtonView = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #000000;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #000000;
    font-weight: bold;
    margin-left: 5px;
`;
export const CustomTextConta = styled.Text`
    font-size: 12px;
    color: #000000;
`;
export const CustomTextSde = styled.Text`
    font-size: 16px;
    color: #000000;
    margin:20px;
`;

export const LoadingIcon  = styled.Text`

    margin-top: 50px;
`;