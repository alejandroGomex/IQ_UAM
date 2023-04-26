import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { ImageBackground, Pressable, Modal, SafeAreaView, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { RuedaInteligencia } from './src/RuedaInteligencia';
import { TiposInteligencia } from './src/TiposInteligencia';

export default function App() {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [modalRegistro, setModalRegistro] = useState(false)
  const [modalRueda, setModalRueda] = useState(false)
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [user, setUser] = useState(null)
  /* const fields = {
    "Nombre Usuario": userName,
    "Contraseña": userPassword,

  };
    const emptyFields = Object.entries(fields)
      .filter(([, value]) => value === "")
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      console.log("Error: Hay campos sin diligenciar:", emptyFields.join(", "));
      Alert.alert("Error", "Hay campos sin diligenciar", [{ text: "Aceptar", onPress: () => console.log("Alerta cerrada") }])
      return;
    }


    if (![userName, userPassword].every(field => field !== "")) {
      console.log("Error: Hay campos sin diligenciar");
      setTimeout(() => {
        Alert.alert("Error", "Hay campos sin diligenciar");
      }, 100);
      return;
    }
   */

  return (
    <Modal>

    <ImageBackground
      source={require('./assets/Logos_UAM-08.png')}
      resizeMode="cover"
      style={styles.backCover}
    >
    </ImageBackground>
    <View style={styles.square}>
      <Text style={{ fontSize: 24, fontFamily: 'Arial', fontWeight: 'bold', color: 'white', marginTop: 60, marginLeft: 50, alignContent:'center' }}>Iq test UAM®</Text>
    </View>
    <View style={styles.campoUsuario}>
      <Text style={styles.text}>Nombre de usuario</Text>
      <TextInput
        placeholder="Ej: alejandro.gomezg"
        placeholderTextColor={"#000000c0"}
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      ></TextInput>
    </View>
    <View style={styles.campoContraseña}>
      <Text style={styles.text}>Contraseña </Text>
      <TextInput
        placeholder="Ej: *****"
        placeholderTextColor={"#000000c0"}
        style={styles.input}
        value={userPassword}
        onChangeText={setUserPassword}
      ></TextInput>
    </View>
    <View style={styles.buttons}>
      <Pressable style={[styles.btn, styles.btnAgregar]}
        onPress={() => { setModalRueda(true)}}
      >
        <RuedaInteligencia
          modalRueda={modalRueda}
          setModalRueda={setModalRueda}
        ></RuedaInteligencia>
        
        <Text style={styles.text}>Ingresar</Text>
      </Pressable>
     {/*  <Pressable onPress={() => { setModalRegistro(true) }} style={[styles.btn, styles.btnRegistrar]} >
        <Text style={styles.text}>Registrarse</Text>
      </Pressable> */}
    </View>
    {/* <Registro
      modalRegistro={modalRegistro}
      setModalRegistro={setModalRegistro}
      registeredUsers={registeredUsers}
      setRegisteredUsers={setRegisteredUsers}
      user={user}
      setUser={setUser}
    ></Registro> */}
        <Pressable onPress={() => {}} style={[styles.btn, styles.btnGoogle]} >
        <Text style={styles.text}>Iniciar Sesion con Google</Text>
      </Pressable>
  </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backCover: {
    position: "absolute",
    marginTop: 100,
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    opacity: 0.7,
    backgroundColor: "rgba(52,52,52,alpha)",
  },
  square: {
    width: 500,
    height: 150,
    justifyContent: 'center',
    backgroundColor: '#0069A3',
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text_btn_user_add: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 0
  },
  campoUsuario: {
    marginTop: 250,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: 'black'
  },
  campoContraseña: {
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: 'black'
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 45,
    marginRight: 20,
    marginLeft: 30,
  },
  btnAgregar: {
    backgroundColor: "#0069A3"
  },
  btnRegistrar: {
    backgroundColor: "#0069A3"
  },
  btnGoogle :{
    backgroundColor: "#F4D73B"
  }
});
