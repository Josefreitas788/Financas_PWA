import * as React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    title: {
        fontFamily: 'Arial',
        fontSize: 40,
        color: '#139892',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignSelf: 'baseline'
        //width: "50%",

    },
    logo: {
        width: 375,
        //width: "100%",
        height: 492,
        resizeMode: 'cover',
        resizeMethod: 'auto',
    },

    button:{
        backgroundColor:"red",
        flexDirection: "rtl",
    },
});

export default styles;