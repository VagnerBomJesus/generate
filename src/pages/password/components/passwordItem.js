import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importe os ícones do Ionicons


export function PasswordItm({ data, removePassword, copyPassword }) {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCopyPassword = () => {
        copyPassword(data); // Chama a função para copiar a senha passando o dado como parâmetro
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ showPassword? data : "•••••••••" }</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={handleCopyPassword} style={styles.icons}>
                    <Ionicons name="copy" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.icons}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={removePassword}>
                    <Ionicons name="trash-bin" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        alignItems: "center",
        color: "#FFF",
        fontWeight:"bold",
    },
    icons:{
        marginRight: 20
    }


})