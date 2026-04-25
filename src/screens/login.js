import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import api from "../services/api";

export default function Login({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    async function entrar() {
        try {
            const response = await api.post("/usuarios/login", { nome, email })
            console.log("resposta:", response.data)
            navigation.navigate("home", { usuario: response.data })
        } catch (erro) {
            console.log("erro:", erro.message)
        }
    }

    return (
        <View style={styles.conteiner}>
            <TextInput placeholder="nome" style={styles.input} onChangeText={setNome} />
            <TextInput placeholder="email" style={styles.input} onChangeText={setEmail} />
            <Button title="entrar" onPress={() => entrar()} />
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: { flex: 1, justifyContent: "center", padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 10 },
})