import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Spaceships({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <view>
        <Text style={styles.listName}>Spaceships</Text>
      </view>
      
      
      <View style={styles.list}>

      </View>
    </View>

  );
}