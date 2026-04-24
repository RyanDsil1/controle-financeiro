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

}
return (
    <view style={stylesheet.conteiner}>
        {movimentacoes.map((map) => (
            <text key={item.id}>
                {item.titulo} - R$ {item.valor}
            </text>
        ))}
        <button title="nova movimentação" onpress={() => navigation.navigate
            ("novamovimentacao", { usuario })} />
    </view>
)

const styles = stylesheet.create({
    conteiner: { flex: 1, padding: 20 }
})
