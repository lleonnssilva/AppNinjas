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

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    
`;

const NomeItem = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;

const inscricao =  ({data}) => {
    return (
        <Area>
            <InfoArea>
                <NomeItem>{data.id}</NomeItem>
                <NomeItem>{data.nome}</NomeItem>
            </InfoArea>
        </Area>
    );
}
export default inscricao;