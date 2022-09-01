import React from "react";
import { View, Text } from "react-native";

export const Titulo = (props) => {
    return(
        <View>
            <Text>{props.titulo}</Text>
        </View>
    )
}

export default Titulo;