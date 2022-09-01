import React,{UseEffect} from 'react';
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";
import api from "../utils/Api";

export const Saldo = (props) => {

    const Deletar = (id) => {
        api.delete('usuarios/'+props.idCliente+'/saldos'+id)
        .then(() =>
        props.navigation.push('Saldos',{id : idCliente, nome: props.nome}));
    }

    return(
        <View>
            <Text>{props.valor}</Text>
            <Button title="Remover" onPress={() => Deletar(props.id)} />
        </View>
    )
}
export default Saldo; 