import {Image, Text, Button} from "react-native";
import random from "../assets/business.jpg";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
// import ApplyForm from "../Components/ApplyForm";

const CurrentScreen=({tabTitle})=>{
    return (
        <>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#003f5c',
                paddingTop: 20
            }}>{tabTitle}</Text>

            <Image source={random} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25,
                marginBottom: 25,
            }}></Image>

            {/* <Text style={{
                fontSize: 20,
                fontWeight: 'bold', 
                paddingTop: 15,
                paddingBottom: 5,
        }}></Text> */}

        

            <Text style={{
            }}>Easy Way to apply leave form</Text>
        </>
    );
    // const HomeScreen = ({ navigation }) => {
    //     return (
    //         <Button
    //             title="Go to Jane's profile"
    //             onPress={() =>
    //                 navigation.navigate('ApplyForm')
    //             }
    //         />
    //     );
    // };
    // const Home = ({ navigation, route }) => {
    //     return <Text>This is {route.params.name}'s profile</Text>;
    // };
}
export default CurrentScreen  