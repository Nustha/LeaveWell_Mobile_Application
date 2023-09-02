import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { app } from '../config/Firebase';
// import { firebase } from "../config/Firebase";
// import HomeScreen from "./HomeScreen";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import SignUp from "./SignUp";
import Home from "./Home";
import HomeScreen from "./HomeScreen"
import logo from "../assets/logo.png";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { ReactNativeFirebase } from "@react-native-firebase/app";

const Stack = createStackNavigator();

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
   
    const auth = getAuth();

    // const validateEmail = (email) => {
    //     // Regular expression to validate email format
    //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     return emailRegex.test(email);
    // };

    // const validatePassword = (password) => {
    //     // Password should be at least 6 characters long
    //     return password.length >= 6;
    // };

    const handleSubmit = () => {
        
        // if (!validateEmail(email)) {
        //     Alert.alert(
        //         'Invalid email', 
        //         'Please enter a valid email address'
        //     );
        // } else if (!validatePassword(password)) {
        //     Alert.alert(
        //         'Invalid password',
        //         'Password should be at least 6 characters long'
        //     );
        // } else {
        //     // Form is valid, perform your desired action here
        //     Alert.alert('Successfully Login');
            
        // }
        // navigation.navigate('HomeScreen');
        
        };
   login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            {
                setEmail("");
                setPassword("");
                navigation.navigate("HomeScreen");
                console.log("Hello");
            }
            
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.textMar}>
                LeaveWell
            </Text>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="E-mail"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.txt}>Don't you have an account?</Text>
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={() => login(email, password)} >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignUp')}  >
                <Text style={styles.loginText}>Sign up</Text>
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
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
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
        fontWeight: 'bold',
        color: "#003151",
    },
    txt:{
        marginBottom: 5,
    }
});