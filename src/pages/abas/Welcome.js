import React from 'react';
import { View, Image, StyleSheet, Text, Pressable ,} from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../img/prix.png')} />

      <Text style={styles.title}>
        Bem-vindo(a) ao PRIX-RFID
      </Text>

      <Text style={styles.regularText}>
      Esse é o seu portal para controle de suas TAGS-RFID e solicitação/perdas das mesmas.
      </Text>


      <Pressable onPress={() => navigation.navigate('Cardápio')} style={styles.button}>
      <Text style={styles.buttonText}>
        Ver meu Perfil e Tags
      </Text>

      </Pressable>

      
      <Pressable onPress={() => navigation.navigate('Newsletter')}>
      <Text style={styles.loseTag}>
        Perda/Roubo de Tag
      </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginVertical: 40,
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
    padding: 24,
    backgroundColor: "#fafafa"
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
        height: 8,
       },
       shadowOpacity: 0.4,
       shadowRadius: 8.0,
       //fim ios
       elevation: 10,
       //android
       
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  regularText: {
    fontSize: 20,
    padding: 6,
    marginVertical: 1,
    color: '#333333',
    textAlign: 'center',
  },
  buttonNews: {
    marginTop: 10,
    padding: 5,
    margin: 10,
    marginVertical: 1,
    backgroundColor: '#3e6a5d',
    borderColor: '#3e6a5d',
    borderWidth: 6,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  loseTag: {
    textAlign: 'center',
    fontSize: 15,
    color: '#171717',
    marginVertical: 4,
  },

});

export default Welcome;