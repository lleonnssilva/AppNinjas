import React from 'react';
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
              <Text>Home Principal</Text>
                </ListArea>
            </Scroller>
        </Container>
    );
}