import React, { useState } from 'react';
import { ImageBackground, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../img/background.png')} resizeMode="cover" style={styles.image}>
     
      <Image style={styles.logo} source={require('../img/prix.png')} />
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Número do celular ou email'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder={'Senha'}
        keyboardType={'default'}
        secureTextEntry={true}
      />

      <TouchableOpacity 
      style={styles.button}
      independent={true}
      onPress={ () => navigation.navigate('Navegador')}
      >
       <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.ForgetText}>Esqueceu a senha?</Text>

      <TouchableOpacity 
      style={styles.button2}
      independent={true}
      onPress={ () => navigation.navigate('Navegador')}
      >
       <Text style={styles.buttonText2}>Criar nova conta</Text>
      </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    height: 140,
    padding: 20,
    margin: 120,
    resizeMode: 'contain',
    alignSelf: 'center'
    
 },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 50,
    margin: 10,
    borderWidth: 0.4,
    padding: 10,
    fontSize: 16,
    borderColor: '#bfbdbd',
    backgroundColor: '#fcfcfc',
    borderRadius: 8,
    borderCurve: 'circular',
  },
  button: {
    padding: 4,
    margin: 10,
    marginVertical: 3,
    backgroundColor: '#171717',
    borderColor: '#171717',
    borderWidth: 3,
    borderRadius: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    //ios
    shadowOffset: {
      width: 0,
      height: 8,
     },
     shadowOpacity: 0.4,
     shadowRadius: 8.0,
     //fim ios
     elevation: 5,
     //android
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  title: {
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ForgetText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#171717',
    marginVertical: 4,
  },
  button2: {
    padding: 5.5,
    margin: 10,
    marginVertical: 140,
    borderColor: '#171717',
    borderWidth: 2,
    borderRadius: 90,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText2: {
    color: '#171717',
    textAlign: 'center',
    fontSize: 18,
  },
});