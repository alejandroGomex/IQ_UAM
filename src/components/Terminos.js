import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  CheckBox,
  Button,
} from "react-native";
import ColorBar from "../Tools/ColorBar";
import { TiposInteligencia } from "./TiposInteligencia";
import { Instrucciones } from "./Instrucciones";
import React, { useState, useEffect } from "react";

export const Terminos = ({ modalTerminos, setModalTerminos }) => {
  const [modalInstruccion, setModalInstruccion] = useState(false);
  const [modalPregunta, setModalPregunta] = useState(false);

  return (
    <Modal animationType='slide' visible={modalTerminos}>
      <View>
        <ColorBar></ColorBar>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require("../../assets/terminosImg.png")}
        />
      </View>
      <View>
        <Text style={styles.title}>
          Nuestros tests han sido cuidadosamente diseñados
          {"\n"} para evaluar diferentes habilidades cognitivas, como
          {"\n"} la comprensión verbal, la capacidad numérica, la
          {"\n"} percepción espacial y la memoria. Además, te
          {"\n"} brindaremos un informe detallado sobre tu puntuación
          {"\n"} y te daremos recomendaciones para mejorar tus
          {"\n"} habilidades. Ya sea que quieras conocer tu IQ por
          {"\n"} curiosidad, para aplicar a un trabajo o para fines
          {"\n"} académicos,
          {"\n"} ¡nuestra página es el lugar perfecto para hacerlo!
        </Text>
      </View>
      <View></View>
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
    fontSize: 13,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    textAlign: "center",
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
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
    marginLeft: 120,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },
  btnRegistrar: {
    backgroundColor: "#0069A3",
  },
  image: {
    width: 250,
    height: 250,
    marginLeft: 10,
    marginTop: 60,
    marginLeft: 80,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
