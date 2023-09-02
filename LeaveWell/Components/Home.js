import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
export default function Home({ navigation }) {
    
    return (
        <View style={styles.container}>
        <View>
                <Image style={styles.image} source={require("../assets/logo.png")} />
                <Text style={styles.create}>
                    LeaveWell
                </Text>
        </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('ApplyForm')}>
                <Text style={styles.loginText}>Apply</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('ViewDetail')}>
                <Text style={styles.loginText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Calender')}>
                <Text style={styles.loginText}>Calender</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Sign out</Text>
            </TouchableOpacity>

        </View>
            
       
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 20,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 5,
        marginLeft: 20,

    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#003151",
        marginBottom: 10,
    },
    loginText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
    },
    textMar: {
        marginBottom: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    create: {
        fontSize: 25,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});