import React from 'react';
import {
    Container,
    Scroller,
    Avatar,
    Area
,
} from './styles';

const Sistemas = ({ navigation, route }) => {

    return (
        <Container>
            <Scroller>
                    <Area  onPress={()=>{  navigation.reset({routes:[{name:'VRTab'}]});}}> 
                    <Avatar source={require('../../assets/logo-via-rapida-10-anos.png')} />
                     </Area> 

                     <Area onPress={()=>{alert('Em construção!');}}> 
                     <Avatar source={require('../../assets/logo-novotec.png')} />
                     </Area> 

                     <Area onPress={()=>{alert('Em construção!');}}> 
                     <Avatar source={require('../../assets/logotipomeuemprego.png')} />
                     </Area> 

                     <Area onPress={()=>{alert('Em construção!');}}> 
                     <Avatar source={require('../../assets/logo_minhachance.png')} />
                     </Area> 
            </Scroller>
        </Container>
    );
}
export default Sistemas;