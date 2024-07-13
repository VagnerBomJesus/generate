import { useState } from "react"

import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"

import { ModalPassword } from "../../components/modal"

let charset = "abcdefghijklmnopkrstuvxwyzABCDEFGHIJKLMNOPKRSTUVWXYZ0123456789"

export  function Home() {

  const [size, setSize] = useState(10)

  const [passwordValue, setPasswordValue] = useState("")

  const [modalVisible, setModalVisible] = useState(false)





  function generatePassword() {

    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)

    console.log("Clicou-- ! " + password);
  }

  return (
    <View style={styles.contaner}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />

      <Text
        style={styles.title}
      > {size} Characters </Text>


      <View style={styles.area}>

        <Slider
          style={{ height: 50, }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#392de9"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={
            (value) => setSize(value.toFixed(0))
          }




        />




      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>
          Generate Password
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handLeClasse={()=> setModalVisible(false)}   />
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 16,
    marginBottom: 16,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,

  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },

  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500"
  }
});