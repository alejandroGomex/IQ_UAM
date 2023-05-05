import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import React, { useState, useEffect } from "react";
import ColorBar from "../Tools/ColorBar";
import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
} from "react-native";
WebBrowser.maybeCompleteAuthSession();
//clientId web:"515494001332-aksh9pt6qig1e612akteu9s1ho6ovj3e.apps.googleusercontent.com"
// ios:"515494001332-oh2l8qmrpd2jv646utsckrlgivjc99jj.apps.googleusercontent.com"
//Android : 515494001332-d1qanfabqbp5tfrlst7no4a5hk8k63no.apps.googleusercontent.com
export const Login = ({ modalLogin, setModalLogin }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [accesToken, setAccesToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, respone, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "515494001332-aksh9pt6qig1e612akteu9s1ho6ovj3e.apps.googleusercontent.com",
    iosClientId:
      "515494001332-oh2l8qmrpd2jv646utsckrlgivjc99jj.apps.googleusercontent.com",
    androidClientId:
      "515494001332-d1qanfabqbp5tfrlst7no4a5hk8k63no.apps.googleusercontent.com",
  });

  return (
    <Modal animationType='slide' visible={modalLogin}>
      <View>
        <ColorBar></ColorBar>
        <Text style={styles.title}>!Bienvenido a IQ TEST UAM®</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>

      {/*<Pressable
        style={styles.btnExit}
        onPress={() => {
          setModalLogin(!modalLogin);
        }}>
        <Text style={styles.btnExit}> X Cerrar</Text>
    </Pressable>*/}
    </Modal>
  );
};
const styles = StyleSheet.create({
  btnExit: {
    backgroundColor: "#0069A3",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#000000",
    fontWeight: "800",
    marginTop: 20,
  },
  container: {
    backgroundColor: "#FFFDFD",
    height: 600,
    width: 360,
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 25,
    marginTop: 20,
  },
});
