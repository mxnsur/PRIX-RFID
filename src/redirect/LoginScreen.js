import React, { useState } from 'react';
import { ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
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
       <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  logo: {
    height: 120,
    width: 245,
    padding: 30,
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
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
});