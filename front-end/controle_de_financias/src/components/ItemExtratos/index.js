import React from 'react';
import { Text, Button, View } from 'react-native';


function sumItemExtratos(props) {
    return (
        <li>{props.nome} {props.valor}</li>
    );
}

function ItemExtratos(props) {
    const extratos = props.array.array.forEach(element => {
        <Text>{element.data}</Text>
        element.info.forEach(info => {
            <sumItemExtratos nome={info.gastoNome} valor={info.valor} />
        });
    });
    return extratos
}

export default ItemExtratos;