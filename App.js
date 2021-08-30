import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";

export default function App() {
  return (
      <View
        style={{backgroundColor: "#f8f4f4",
                padding: 20,
                paddingTop: 10,}}
      >
        <Card 
          title="Red jacket for sale"
          subTitle="$200"
          image={require("./app/assets/jacket.jpg")}
        />
      </View>
    )
}


