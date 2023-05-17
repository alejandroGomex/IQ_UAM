import {
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
} from "react-native";

import ColorBar from "../Tools/ColorBar";

import { Pregunta2 } from "./Pregunta2";
import React, { useState, useEffect } from "react";

export const Pregunta = ({ modalPregunta, setModalPregunta }) => {
  const [modalPregunta2, setModalPregunta2] = useState(true);

  return (
    <Modal animationType='slide' visible={modalPregunta}>
      <View>
        <ColorBar></ColorBar>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require("../../assets/questions/question1/p1.png")}
        />
      </View>
      <View style={styles.containerIm}>
        <Image
          style={styles.subimage}
          source={require("../../assets/questions/question1/r1.png")}
        />
        <Image
          style={styles.subimage}
          source={require("../../assets/questions/question1/r2.png")}
        />
        <Image
          style={styles.subimage}
          source={require("../../assets/questions/question1/r3.png")}
        />
      </View>
      <View style={styles.containerIm}>
        <Image
          style={styles.subimagef2}
          source={require("../../assets/questions/question1/r4.png")}
        />
        <Image
          style={styles.subimagef2}
          source={require("../../assets/questions/question1/r5.png")}
        />
        <Image
          style={styles.subimagef2}
          source={require("../../assets/questions/question1/r6.png")}
        />
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.btn, styles.btnAgregar]}
          onPress={() => {
            setModalPregunta2(true);
          }}>
          <Pregunta2
            modalPregunta2={modalPregunta2}
            setModalPregunta2={setModalPregunta2}></Pregunta2>

          <Text style={styles.subtitle}>Continuar</Text>
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

  text_btn_user_add: {
    color: "#FCFCFC",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 45,
    marginLeft: 120,
    marginTop: 35,
  },
  btnAgregar: {
    backgroundColor: "#0069A3",
  },

  image: {
    marginTop: 40,
    width: 300,
    height: 350,
    marginLeft: 50,
  },
  containerIm: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginLeft: 30,
  },
  subimage: {
    marginTop: 20,
    width: 100,
    height: 75,
  },
  subimagef2: {
    marginTop: 20,
    width: 100,
    height: 75,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
