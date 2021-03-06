import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={4}
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log('closed')} />
                <AppButton title="Register" color="secondary"  />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;