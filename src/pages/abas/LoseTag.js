import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native';
import Button from "../componentes/Button";

const LoseTag = () => { 
    const [firstName, onChangeFirstName] = useState(''); 
    const [email, onChangeEmail] = useState(''); 
    const [phoneNumber, onChangePhoneNumber] = useState(''); 
    const [tipeCar, onChangeTipeCar] = useState(''); 
    const [carLicense, onChangeCarLicense] = useState(''); 
    const [message, onChangeMessage] = useState(''); 

return ( 
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView keyboardDismissMode="on-drag"> 
        <Image
        style={styles.logo}
        source={require("../../img/prix.png")}
        />
        <Text style={styles.headingSection}> 
        Sua TAG foi perdida ou roubada?
         </Text> 
        <Text style={styles.infoSection}> 
        Basta preencher o formulário abaixo para realizar a solicitação da sua nova TAG RFID
         </Text> 
        <TextInput 
        style={styles.input} 
        value={firstName} 
        onChangeText={onChangeFirstName} 
        placeholder={'Nome'}
        clearButtonMode={'always'}
        /> 
        <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={onChangeEmail} 
        placeholder={'E-mail'} 
        keyboardType={"email-address"}
        clearButtonMode={'always'}
        /> 
        <TextInput 
        style={styles.input} 
        value={phoneNumber} 
        onChangeText={onChangePhoneNumber} 
        placeholder={'Celular'} 
        keyboardType={"phone-pad"}
        clearButtonMode={'always'}
        /> 
        <TextInput 
        style={styles.input} 
        value={tipeCar} 
        onChangeText={onChangeTipeCar} 
        placeholder={'Tipo do Carro'} 
        keyboardType={"default"}
        clearButtonMode={'always'}
        /> 
        <TextInput 
        style={styles.input} 
        value={carLicense} 
        onChangeText={onChangeCarLicense} 
        placeholder={'Placa do Veículo'} 
        keyboardType={"phone-pad"}
        clearButtonMode={'always'}
        /> 
         <TextInput 
        style={styles.messageInput} 
        value={message} 
        onChangeText={onChangeMessage}
        placeholder={'Conte-nos resumidamente o ocorrido'} 
        multiline={true}
        maxLength={250}
        clearButtonMode={'always'}
        /> 

        <Button
        onPress={() => {Alert.alert("Obrigado pelo envio, os próximos passos serão enviados em seu email!"); }}>
        Enviar
       </Button>
    </ScrollView> 
    </KeyboardAvoidingView>
        ); 
    };
        
    const styles = StyleSheet.create({ 
        container: { 
        flex: 1, 
        backgroundColor: "#fafafa"
        }, 

        logo: {
          marginTop: 40,
          height: 80,
          width: 300,
          resizeMode: "contain",
          marginBottom: 30,
          alignSelf: 'center'
        },

        headingSection: { 
          marginTop: 10,
          color: '#333333',
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          }, 
          
        infoSection: { 
          margin: 20,
          fontSize: 16,
          padding: 1,
          color: '#333333',
          textAlign: 'center',
        }, 

        input: { 
          height: 40,
          marginLeft: 30, 
          marginRight: 30, 
          marginTop: 10,
          borderWidth: 1, 
          padding: 10, 
          fontSize: 16, 
          borderColor: '#cfd4d2', 
          backgroundColor: 'white', 
          borderRadius: 8,
          borderWidth: 2,
          }, 
  
        messageInput: { 
          height: 90, 
          marginLeft: 30, 
          marginRight: 30, 
          marginTop: 10,
          marginVertical: 15,
          borderWidth: 1, 
          padding: 10, 
          fontSize: 16, 
          borderColor: '#cfd4d2', 
          backgroundColor: 'white', 
          borderRadius: 8,
          borderWidth: 2,
          }, 
     }); 
            
export default LoseTag;