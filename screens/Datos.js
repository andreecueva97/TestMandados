import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet, TextInput,
  Text, View, Input,
  useColorScheme, TouchableOpacity, Alert
} from 'react-native';
import { UpdateMode } from 'realm';
//import realm, { Juego, User, version3 } from '../REALMDB.js';
// import { UserState } from 'realm';
import Realm from 'realm';
const Datos = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  //const [rrealm, setRealm] = useState(realm);
  const incrementNombre = () => setNombre('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [dni, setDni] = useState('');
  const [userId, setUserId] = useState(0);
  let realm;
  
  realm = new Realm({ path:'version6.realm' });
  useEffect(() => {
    // action on update of userId
   // setUserId(realm.objects('User').length + 1);
    //setNombre('');
    //setNombre('nombre'); setApellido('apellido'); setEdad('edad'); setDni('dni');
  }, [userId]);
  const agregarUser = () => {
    
    // realm.write(() => {
    //   realm.deleteAll();
    // });
    let last = realm.objects('User').length + 1;
    //this.setState({ realm });
    console.log('Users Viejos ----------------------------------------------------');
    console.log(realm.objects('User'));
    realm.write(() => {
      realm.create('User', {
        id: last,
        name: nombre,
        apellido: apellido,
        edad: edad,
        dni: dni,
      });
    });
    // setRealm(realm);
    console.log('Users Update-------------------------------------------------');
    console.log(realm.objects('User'));
    setUserId(realm.objects('User').length + 1);
    //realm._updateSchema();

    console.log(userId);
    console.log(nombre);
    incrementNombre();
    console.log(realm.objects('User')[realm.objects('User').length - 1]);
    //realm._updateSchema([User]);
    Alert.alert('Usuario creado');
    navigation.navigate('Juego_Mapa', { user: realm.objects('User')[realm.objects('User').length - 1] });
  }
  // <TextInput ref={'textInput1'} style={styles.textInputAyudar} onChangeText={value => this.setState({ inputApellido: value })} />

  const handleVerificateOfData = () => {

    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(dni);

  }
  return (
    <View style={styles.inicio_View}>
      {/* <Text style ={{textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA DATOS</Text> */}
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}>Para comenzar, debe ingresar los siguientes datos</Text>
      </View>
      <TextInput style={styles.datos_textinput}
        //ref={"textInput1"}
        underlineColorAndroid="transparent"
        placeholder="nombre"
        placeholderTextColor="black"
        autoCapitalize="none"
        // defaultValue={apellido}
        onChangeText={nombre => setNombre(nombre)}
      // <TextInput ref={'textInput1'} style={styles.textInputAyudar} onChangeText={value => this.setState({ inputApellido: value })} />

      />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}></Text>
      </View>
      <TextInput style={styles.datos_textinput}
        // ref={"apellido"}
        //underlineColorAndroid="transparent"
        placeholder="apellido"
        placeholderTextColor="black"
        // autoCapitalize="none"
        //value={apellido}
        onChangeText={setApellido}
      />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}></Text>
      </View>
      <TextInput style={styles.datos_textinput}
        //  ref={"edad"}
        underlineColorAndroid="transparent"
        placeholder="edad"
        keyboardType="numeric"
        placeholderTextColor="black"
        autoCapitalize="none"
        // defaultValue={edad}
        onChangeText={edad => setEdad(edad)}
        maxLength={3}
      />
      <View style={styles.inicio_Title}>
        <Text style={styles.inicio_Text}></Text>
      </View>
      <TextInput style={styles.datos_textinput}
        // ref={"dni"}
        underlineColorAndroid="transparent"
        placeholder="dni"
        keyboardType="numeric"
        placeholderTextColor="black"
        autoCapitalize="none"
        // defaultValue={dni}
        onChangeText={dni => setDni(dni)}
        maxLength={10}
      />
      <View style={{
        alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
        marginBottom: 10, paddingTop: 20
      }}>
        <TouchableOpacity
          style={styles.inicio_Button}
          onPress={() => {

            handleVerificateOfData();
            agregarUser();


          }}
        >
          <Text style={styles.inicio_TextButton}>Iniciar Juego</Text>
        </TouchableOpacity>
      </View>

    </View>)


}
const styles = StyleSheet.create({
  datos_textinput: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
  },
  inicio_View: {
    flexDirection: 'column', 
    //backgroundColor: '#3671A3',
    backgroundColor:'#DFDFE2',
    flex: 1,
    alignContent: 'center', justifyContent: 'center',
    paddingTop: 0,
  },
  inicio_TextButton: {
    fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Text: {
    backgroundColor: '#DFDFE2', fontSize: 30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center'
  },
  inicio_Button: {
    fontSize: 30,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  }
});

export default Datos;