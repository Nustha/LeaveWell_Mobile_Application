import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Background from './Background';

const Home = () => {
    return (
        <Background>
        <View>
                <Image source={require("./logo.png")} style={{ height: '100%' }} />
        </View>
        <View style={{ marginHorizontal: 40, marginVertical: 100}}>
                <Text style={{ color: 'white', fontSize: 55 , textAlign: 'center'}}>LeaveWell</Text>
                <Text style={{ color: 'white', fontSize: 50 }}>Let's Start</Text>
        </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;