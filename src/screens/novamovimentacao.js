import { useState } from "react";
import { View, textinput, button, stylesheet } from "react-native";
import api from "../services/api";

export default function novamovimentacao({ route, naviagtion}){
    const { usuarios} = route.params;
    const [titulo, setTitulo] = useState("");
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("");

    async function salvar(){
        await api.post("/movimentacoes",{
            usuario_id : usuario.usuario_id,
            titulo,
            valor,
            tipo
            
        })
        naviagtion.goback();
    }
    return(
        <view style={stylesheet.conteiner}>
            <textinput placeholder="titulo" style=
            {styles.input} onchangetext= {setTitulo}/>
            <textinput placeholder="valor" style=
            {styles.input} onchangetext={setValor}/>
            <textinput placeholder="tipo" style=
            {styles.input} onchangetext={setTipo}/>
            <button title="salvar" onpress={salvar}/>
         </view>
    )
}

const style = stylesheet.create({
    conteiner : {flex: 1, padding: 20},
    input : {borderWidht: 1, marginBotton:10,
    padding: 10
    }
})