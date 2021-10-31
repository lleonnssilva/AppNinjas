import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import {
    Container,
    Scroller,
    ListArea,
} from './styles';


export default () => {


    return (
        <Container>
            <Scroller>
                <ListArea>
              <Text>Home Via Rápida</Text>
                </ListArea>
            </Scroller>
        </Container>
    );
}