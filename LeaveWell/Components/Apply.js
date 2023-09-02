import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    DatePickerAndroid,
    Button,
    ScrollView,
    Image,
    Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

function Apply({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [reason, setReason] = useState("");
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dates, setDate] = useState('');
    const [dates1, setDate1] = useState('');
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const handleConfirm = (date) => {
        setDate(moment(date).format('DD/MM/YYYY'))
        hideDatePicker();
    }

   
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Image style={styles.image} source={require("../assets/logo.png")} /> */}
                <Text style={styles.textMar}>
                    LeaveWell
                </Text>
                <Text style={styles.create}>
                    Leave Form
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
                <View style={styles.inputView1}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter your reason here..."
                        placeholderTextColor="#003f5c"
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(reason) => setReason(reason)}
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
                {/* <TextInput label="Enter Name" variant="standard" style={styles.inputView} /> */}

                <View style={styles.dateShowContainer}>
                    <Text style={styles.title}>{dates}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={showDatePicker} >
                        <Image source={require("../assets/calendar.png")} style={styles.image} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        style={styles.datePicker}
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={styles.dateShowContainer}>
                    <Text style={styles.title}>{dates1}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={showDatePicker} >
                        <Image source={require("../assets/calendar.png")} style={styles.image} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        style={styles.datePicker}
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.loginText}>Back</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

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
        height: 20,
        width: 20,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        // alignItems: "center",
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
        marginBottom: 0,
        fontSize: 30,
        fontWeight: 'bold'
    },
    create: {
        fontSize: 18,
        marginBottom: 30,
    },
    datePicker: {
        width: "80%",
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#D3D3D3",

    },
    inputView1: {
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        width: "80%",
        height: 100,
        marginBottom: 20,
        // alignItems: "center",
        textAlign: "auto",

    },
    dateShowContainer: {
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 20,
        // alignItems: "center",
        textAlign: "auto",
    }

},
);

export default Apply;