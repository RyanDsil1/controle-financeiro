import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import api from "../services/api"

export default function home({ route, navigation }) {
    const { usuario } = route.params
    const [movimentacoes, setmovimentacoes] = useState([])

    async function carregar() {
        const response = await api.get(`/movimentacoes/${usuario.id}`)
        setmovimentacoes(response.data)
    }

    useEffect(() => {
        carregar()
    }, [])

    return ( 
        <View style={styles.conteiner}>
            {movimentacoes.map((item) => (  
                <Text key={item.id}>
                    {item.titulo} - R$ {item.valor}
                </Text>
            ))}
            <Button title="nova movimentação" onPress={() => navigation.navigate("novamovimentacao", { usuario })} />
        </View>
    )
}

const styles = StyleSheet.create({  
    conteiner: { flex: 1, padding: 20 }
})