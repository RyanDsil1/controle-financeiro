import { useState } from "react";
import {View, textinput, button, stylesheet} from "react-native";
import api from "../services/api";
import { Button } from "react-native/types_generated/index";

export default function login({login}){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    async function entrar(){
        const response = await api.post("/usuario/login",{
            nome,
            email
        })

        Navigation.navigate("home", {
            usuario : response.data
        }) 
    }
    return(
        <View style={styles.conteiner}>
            <textinput placeholder="nome" style={styles.input} onchangetext = {setNome}/>
            <textinput placeholder="email" style={styles.input} onchangetext={setEmail}/>
            <Button title="entrar" onPress={entrar}/>

        </View>
    )
}

const styles = styleSheet.create({
    Container : {flex:1, justifyContent:"center", padding:20},
    input : {borderWidht: 1, marginBottom: 10, padding:10},
})