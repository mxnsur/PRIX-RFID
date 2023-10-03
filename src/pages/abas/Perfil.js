import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

const Perfil = () => {

  const [collapsed, setCollapsed] = React.useState(true);
  const toggleExpand=()=>{
    setCollapsed(!collapsed)
  }
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
      
      <TouchableOpacity onPress={toggleExpand} style={styles.button} >
       <Text style={styles.buttonText}>Ver a minha UID</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <Text style={styles.headingSection}>UID da TAG: ED 78 03 CA</Text>
      </Collapsible>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fafafa"
    }, 

  headingSection: { 
    marginTop: 2,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  },

    buttonText: {
      fontSize: 22,
      color: 'white',
    },
     
},
);

export default Perfil;