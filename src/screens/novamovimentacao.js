import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native"; 
import api from "../services/api";

export default function novamovimentacao({ route, navigation }) {  
    const { usuario } = route.params;  // 
    const [titulo, setTitulo] = useState("");
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("");

    async function salvar() {
        await api.post("/movimentacoes", {
            usuario_id: usuario.id,  
            titulo,
            valor,
            tipo
        })
        navigation.goBack(); 
    }

    return (
        <View style={styles.conteiner}>
            <TextInput placeholder="titulo" style={styles.input} onChangeText={setTitulo} />
            <TextInput placeholder="valor" style={styles.input} onChangeText={setValor} />
            <TextInput placeholder="tipo" style={styles.input} onChangeText={setTipo} />
            <Button title="salvar" onPress={salvar} />
        </View>
    )
}

const styles = StyleSheet.create({ 
    conteiner: { flex: 1, padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 10 }  
})