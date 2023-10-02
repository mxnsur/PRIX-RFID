import React from 'react';
import { ScrollView, Image, StyleSheet, Text } from 'react-native';

const Perfil = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../../img/prix.png')} />
      <Text style={styles.title}>
        Veja o seu cadastro com a PRIX-RFID
      </Text>
      <Image
        style={styles.image}
        source={require('../../img/profile.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Imagem Perfil'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fafafa"
    }, 

  logo: {
    marginTop: 20,
    height: 50,
    width: 300,
    resizeMode: "contain",
    marginBottom: 30,
    alignSelf: 'center'
     
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 20,
    alignSelf: 'center'
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Perfil;