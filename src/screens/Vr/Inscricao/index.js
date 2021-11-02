import React, { useState,useEffect } from "react";
import {YellowBox,View,StyleSheet,Modal,Text,Pressable,Dimensions} from 'react-native';
import { RefreshControl,Image } from 'react-native';
import Api from '../../../services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import BackIcon from '../../../assets/back.svg';
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,

    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "flex-start",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: Dimensions.get('window').width-40,
      height : Dimensions.get('window').height/2.5
    },
    button: {
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#000000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    botaoFechar:{
      width: 90,
      height: 40,
      color: '#ffffff',
      border: 1 ,
      borderColor:'#999999',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 20,
      marginRight :20,
      backgroundColor: "#000000",
    }
  });
import {
    Container,
    Scroller,
    IconeCarregamento,
    ListArea,
    BackButton,
    Area,
    InfoArea,
    NomeUsuario,
    TituloCurso,
    BotaoFechar,
    BotaoFecharText
} from './styles';


const Inscricao = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const [cursoqualificacao, setCursoqualificacao] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [modalDetalheVisible, setModalDetalheVisible] = useState(false);
    const [detalheIncricao, setDetalheIncricao] = useState();

    const listarInscricoes = async () => {
        setCursoqualificacao(cursoqualificacao => [] );

        var response = await Api.listarInscricoes();

        for (var i = 0; i < response.length; i++) {
            var res = await Api.pegarIncricao(response[i].id);
            setCursoqualificacao(cursoqualificacao => [...cursoqualificacao,res] );
            console.log(res);
         }
        setLoading(false);
    }
    
    const getInscricao = async (item) => {
      setLoading(true);
      var res = await  Api.pegarIncricao(item);
      setDetalheIncricao(res );
      console.log('detalhe',item,'detalhe');
      setLoading(false);
    
        setModalDetalheVisible(true);
     
    }

    useEffect(()=>{
      setCursoqualificacao(cursoqualificacao => [] );
      listarInscricoes();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        listarInscricoes();
    }

    const handleDetalheChoose = (key) => {
      
      getInscricao(key);

    }
    
    const handelBackButtom =  () =>{
      navigation.reset({
        routes: [{name: 'MainTab'}]
    });
    }
    
    return (
        <Container>
           <BackButton onPress={handelBackButtom}>
                <BackIcon width="44" height="44" fill="#000000"/>
           </BackButton>
          
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                 
                {loading &&
                    <IconeCarregamento size="large" color="#FFFFFF" />
                }
                
                <ListArea>
               
                <Image style={{height: 50, width: 50, resizeMode:'contain'}} source={require('../../../assets/logo-via-rapida-10-anos.png')}/>
                   <TituloCurso>Cursos do Via Rápida que você se inscreveu:</TituloCurso>
                    {cursoqualificacao.map((item, k)=>(
                         <Area key={k} onPress={()=> handleDetalheChoose(item.id)}>
                         <InfoArea key={k}>
                             <NomeUsuario>{item.id}</NomeUsuario>
                             <NomeUsuario>{item.turmaPrincipal.nome}</NomeUsuario> 
                         </InfoArea>
               
                     </Area>
                    ))}
                </ListArea>
            </Scroller>
            {detalheIncricao &&   
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDetalheVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalDetalheVisible(!modalDetalheVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Detalhes do curso</Text>
            <Text>Id:{detalheIncricao.id}</Text>
            <Text>Carga horária: {detalheIncricao.turmaPrincipal.cargaHoraria}</Text>
            <Text>Data Inclusão: {detalheIncricao.dataInclusao}</Text>
            <Text>Formato: {detalheIncricao.turmaPrincipal.formato.nome}</Text>
            <Text>Unidade: {detalheIncricao.turmaPrincipal.ordemServico.nomeUnidade}</Text>
            <Text>Período: {detalheIncricao.turmaPrincipal.periodo}</Text>
            <Text>Quantidade Alunos {detalheIncricao.turmaPrincipal.quantidadeAluno}</Text>
            <Pressable
              style={[styles.botaoFechar, styles.buttonClose]}
              onPress={() => setModalDetalheVisible(!modalDetalheVisible)}
            >
            <Text style={{color:"#ffffff"}}>Fechar</Text>
            </Pressable>

            {/* <BotaoFechar onPress={() => setModalDetalheVisible(!modalDetalheVisible)}> 
                    <BotaoFecharText>Fechar</BotaoFecharText>
            </BotaoFechar> */}
          </View>
        </View>
      </Modal>}
        </Container>
    );
}
export default Inscricao;