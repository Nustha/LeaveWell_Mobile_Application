import React from 'react';
import { ImageBackground, StyleSheet, View,Text} from 'react-native';

const Background = ({ Children}) => {
    return (
        <View>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: 'black', fontSize: 55, textAlign: 'center' }}>LeaveWell</Text>
                <Text style={{ color: 'black', fontSize: 50 }}>Let's Start</Text>
            </View>
            <ImageBackground source={require("./img1.png")} style={{ height: '100%'}} />
            <View style={{ position: "absolute"}}>
                { Children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Background;