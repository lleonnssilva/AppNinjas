
import React, { useState,useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/navigation/StackNavigator';
import {YellowBox,View,StyleSheet,Modal,Text,Pressable} from 'react-native';
import OneSignal from 'react-native-onesignal';
import envs from './src/config/env'


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#000000",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

function App() {

  
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  console.disableYellowBox = true;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNotificacao, setModalNotificacao] = useState('Olá aluno, estão abertas as inscrições para os cursos Univesp. São mais de 10 cursos para você se inscrever e receber um auxílio do governo.');
  const {TOKEN_ONSIGNAL_URL}  = envs;

  useEffect(() => {

    OneSignal.setLogLevel(6, 0);
    OneSignal.init(TOKEN_ONSIGNAL_URL);
    OneSignal.addEventListener('opened', onOpened);

    return ()=> OneSignal.removeEventListener('opened',onOpened);

   }, []);

  const onOpened = (openResult) => {
    console.log('Mensagem: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('Ativo: ', openResult.notification.isAppInFocus);
    console.log('Result: ', openResult);
   setModalNotificacao(openResult.notification.payload.body);
   setModalVisible(true);
  };
  return (
    <UserContextProvider>
    <NavigationContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Notificação!</Text>
            <Text>{modalNotificacao}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
            <Text>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     <MainStack/>
    </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
