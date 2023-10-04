import React from 'react';
import { ImageBackground, View, Image, StyleSheet, Text, Pressable ,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../img/background.png')} resizeMode="stretch" style={styles.image2}>
      <Image style={styles.logo} source={require('../../img/prix.png')} />

      <Text style={styles.title}>
        Bem-vindo(a) ao PRIX-RFID
      </Text>

      <Text style={styles.regularText}>
      Esse é o seu portal para controle de suas TAGS-RFID e solicitação/perdas das mesmas.
      </Text>


      <Pressable onPress={() => navigation.navigate('SolicitarTag')} style={styles.button}>
      <Text style={styles.buttonText}>
        Ver meu Perfil
      </Text>

      </Pressable>

      
      <Pressable onPress={() => navigation.navigate('SolicitarTag')}>
      <Text style={styles.loseTag}>
        Perda/Roubo de <Text style={{fontWeight: "bold"}}>Tag</Text>
      </Text>
      </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
     marginTop: 0,
     height: 100,
     width: 245,
     resizeMode: 'contain',
     alignSelf: 'center'
     
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    margin: 5,
  },
  container: {
    flex: 1,
  },
  title: {
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
      padding: 5,
      marginTop: 20,
      marginLeft: 30, 
      marginRight: 30, 
      backgroundColor: '#171717',
      borderColor: '#171717',
      borderWidth: 6,
      borderRadius: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      //ios
      shadowOffset: {
        width: 0,
        height: 4,
       },
       shadowOpacity: 0.4,
       shadowRadius: 8.0,
       //fim ios
       elevation: 6,
       //android
       
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
  regularText: {
    fontSize: 20,
    padding: 6,
    marginVertical: 1,
    color: '#333333',
    textAlign: 'center',
  },

  loseTag: {
    textAlign: 'center',
    fontSize: 14,
    color: '#171717',
    marginVertical: 4,
  },

  image2: {
    flex: 1,
    width: 430,
    height: 900,
    justifyContent: 'center',
  },

});

export default Welcome;