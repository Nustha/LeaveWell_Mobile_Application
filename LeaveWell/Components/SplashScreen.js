import React from 'react';
import { Image, StyleSheet, View,Text } from 'react-native';
import logo from "../assets/logo-1.png"

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={logo}
                style={styles.image}
            />
            <Text style={styles.text}>Leave
                <Text style={styles.text1}>Well
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        resizeMode: 'contain',
        marginBottom: 10,
    },
    text:{
        fontSize: 60,
        fontWeight: 'bold',
        bottom: 20,
        color: '#003151'
    },
    text1: {
        fontSize: 60,
        fontWeight: 'bold',
        bottom: 20,
        color: '#8A93A6'
    }
});

