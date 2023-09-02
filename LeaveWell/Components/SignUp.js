import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from "../App";
import { Alert } from "react-native";
// import HomeScreen from "./Components/HomeScreen";
export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName , setFirstName]= useState("");
    const [lastName , setLastName]= useState("");


    const auth = getAuth();
    

    _signup = async (email, password) => {
        try {

            
            await createUserWithEmailAndPassword(auth, email, password)
                // .then((userCredential) => {
                //     // Signed in
                //     setEmail("");
                //     setPassword("");
                //     setFirstName("");
                //     setLastName("");
                //     const user = userCredential.user;
                //     // ...
                //     navigation.navigate("Login");
                // })
            {
                // Alert.alert("", data)
                navigation.navigate("Login")
}
                // .catch((error) => {
                //     const errorCode = error.code;
                //     const errorMessage = error.message;
                //     // ..
                // });
            }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            {/* <Image style={styles.image} source={require("./assets/logo.png")} /> */}
            <Text style={styles.textMar}>
                LeaveWell
            </Text>
            <Text style={styles.create}>
                Create Account
            </Text>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastName) => setLastName(lastName)}
                />
            </View>
            <View style={styles.inputView}>
            <TextInput
                    style={styles.TextInput}
                    placeholder="E-mail"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />  
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            
            <TouchableOpacity style={styles.loginBtn} onPress={() => _signup(email, password)} >
                <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.loginText}>Back</Text>
            </TouchableOpacity>
            {/* <View>
                <Button
                    onPress={() => navigation.goBack()}
                    title="Back"
                    color="#003151"
                    borderRadius=""
                />
            </View> */}
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
    create:{
        fontSize: 18,
        marginBottom: 30,
    }
});