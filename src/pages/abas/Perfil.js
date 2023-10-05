import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, SectionList } from 'react-native';
import Collapsible from 'react-native-collapsible';

const menuItemsToDisplay = [
    {
        title: 'Dados Pessois',
        data: [
          { name: 'Nome Completo', price: 'Prix Toledo Overflow' },
          { name: 'CPF', price: '289.878.904-23' },
          { name: 'Telefone', price: '(11) 98934-4782' },
        ],
      }, 
      {
        title: 'Dados do Veículo',
        data: [
          { name: 'Modelo', price: 'Mercedes Actros L' },
          { name: 'Placa', price: 'RHU1E90' },
          { name: 'Número de registro', price: '894.989.9098-9' },
        ],
      },
      {
        title: '',
        data: [
          { name: '', price: '' },
          { name: '', price: '' },
          { name: '', price: ''},
          { name: '', price: ''},
          { name: '', price: ''},
        ],
      },
    ];
  
  const Separator = () => <View style={styles.separator} />;

  const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  );
  
  const MenuItems = () => {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  
    const renderSectionHeader = ({ section: { title } }) => (
      <View style={styles.headerStyle}>
        <Text style={styles.sectionHeader}>{title}</Text>
      </View>
    )

    const [collapsed, setCollapsed] = React.useState(true);
    const toggleExpand = () => {
    setCollapsed(!collapsed)
    }

    return (
      <View style={styles.container}>
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
      <Text style={styles.infoSection}>UID da TAG: <Text style={{fontWeight: "bold"}}>ED 78 03 CA</Text></Text>
      </Collapsible>

        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}>
        </SectionList>
      
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fafafa"
    },
    
    image: {
      marginTop: 40,
      width: 400,
      height: 300,
      borderRadius: 20,
      alignSelf: 'center'
    },
    
    sectionHeader: {
      backgroundColor: '#171717',
      color: '#ffffff',
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 20,
      textAlign: 'center',
    },
  
    innerContainer: {
      paddingHorizontal: 40,
      paddingVertical: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  
    itemText: {
      color: '#333333',
      fontSize: 15,
    },
    
    separator: {
      borderBottomWidth: 1.5,
      borderColor: '#dbdbdb',
    },
  
    button: {
      padding: 5,
      marginLeft: 60, 
      marginRight: 60, 
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

      infoSection: { 
        margin: 5,
        fontSize: 18,
        padding: 1,
        color: '#333333',
        textAlign: 'center',
      }, 
  },
  );
  
  export default MenuItems;