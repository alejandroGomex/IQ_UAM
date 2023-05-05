import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { TiposInteligencia } from "./TiposInteligencia";
import React, { useState, useEffect } from "react";

export const RuedaInteligencia = ({ modalRueda, setModalRueda }) => {
  const [modalInteligencia, setModalInteligencia] = useState(false);

  return (
    <Modal animationType='slide' visible={modalRueda}>
      <View style={styles.square}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "white",
            marginTop: 60,
            marginLeft: 50,
          }}>
          Gestor de emergencias UAM®
        </Text>
        <Text>Hola algo aqui va lo de la rueda de inteliencias </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            setModalInteligencia(true);
          }}>
          <TiposInteligencia
            modalInteligencia={modalInteligencia}
            setModalInteligencia={setModalInteligencia}></TiposInteligencia>

          <Text style={styles.text}>Ingresar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  backCover: {
    position: "absolute",
    marginTop: 100,
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    opacity: 0.6,
    backgroundColor: "rgba(52,52,52,alpha)",
  },
  square: {
    width: 500,
    height: 150,
    justifyContent: "center",
    backgroundColor: "#0069A3",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text_btn_user_add: {
    color: "#FCFCFC",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  campoUsuario: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: "black",
  },
  campoContraseña: {
    marginLeft: 50,
    marginRight: 50,
    opacity: 0.9,
    marginBottom: 50,
    borderColor: "black",
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
    marginLeft: 127,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
});
