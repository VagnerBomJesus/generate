import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";


export function ModalPassword({password, handLeClasse}) {

    return (
        <View style={style.container}>

            <View style={style.contetnt}>
                <Text style={style.title}>
                    Generate Password
                </Text>
                <Pressable style={style.ineerPassword}>
                    <Text style={style.text}>
                        {password}
                    </Text>
                </Pressable>


                <View style={style.buttonArea}>
                    <TouchableOpacity style={style.button} onPress={handLeClasse}>
                        <Text style={style.textButton}>
                            Go Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.button, style.buttonSave]}>
                        <Text style={style.textSaveButton}>
                            Save Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    contetnt: {
        backgroundColor: "#fff",
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 24,
        paddingTop: 24,
        borderRadius: 8,

    },
    ineerPassword: {
        width: '90%',
        backgroundColor: "#0e0e0e",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        textAlign: "center",
        color: "#FFF",
    },
    buttonArea:{
        flexDirection: "row",
        width:"90%",
        marginTop:8,
        alignItems:"center",
        justifyContent:"space-between",
    },
    button:{
        flex:1,
        alignItems:"center",
        marginBottom:14,
        marginTop:14,
        padding:8,
    },
    buttonSave:{
        backgroundColor:"#392de9",
        borderRadius:8,
    },
    textSaveButton:{
        color:"#fff",
        fontWeight:"bold",
    },
    
})