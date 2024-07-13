import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import * as Clipboard from "expo-clipboard";

import { PasswordItm } from "./components/passwordItem";


export function Passwords() {

    const [listPasswords, setListPasswords] = useState([])

    const focused = useIsFocused();

    const { getItem, removeItem } = useStorage();


    useEffect(() => {

        async function loadPasswords() {

            const passwords = await getItem("@pass")

            setListPasswords(passwords)

        }

        loadPasswords();
    }, [focused])



    async function handleDeletePassword(item) {
        const password = await removeItem("@pass", item)

        setListPasswords(password)

    }
    
    async function handleHidePassword(item) {
        // Implemente lógica para remover a senha da lista
        const updatedPasswords = listPasswords.filter(password => password !== item);
        setListPasswords(updatedPasswords);
        await removeItem("@pass", item); // Remova a senha do AsyncStorage, se necessário
    }
    
    
    const handleCopyPassword = async (password) => {   
        await Clipboard.setStringAsync(password);
        alert("Senha copiada para a área de transferência!");
    };
 
    

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={style.header}>
                <Text style={style.title}>
                    My Passwords
                </Text>
            </View>

            <View style={style.content}>
                 
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) =>
                        <PasswordItm
                            data={item}
                            removePassword={() => handleDeletePassword(item)}
                            //hidePassword={() => handleHidePassword(item)}
                            copyPassword={(password) => handleCopyPassword(password)}
                        />
                    }
                />


            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,

    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        paddingRight: 14,
        paddingLeft: 14,


    },
});