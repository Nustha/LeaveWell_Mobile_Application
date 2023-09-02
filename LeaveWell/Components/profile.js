import {Image, Text, TouchableOpacity, View} from "react-native";
import profile from "../assets/muwomen.jpg";
import React from "react";

export  const Profile=({name, profileImage})=>{
    return (
        <View style={{ marginTop:"15%", marginLeft:"3%" }}>
        <Image source={profile} style={{
            width: 70,
            height: 70,
            borderRadius: 10,
            marginTop: 8
        }}></Image>

        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 10
        }}>{name}
        </Text>

        <TouchableOpacity>
            <Text style={{
                marginTop: 4,
                color: 'white'
            }}>HNDIT in Sammanthurai</Text>
        </TouchableOpacity>
        </View>);

        }