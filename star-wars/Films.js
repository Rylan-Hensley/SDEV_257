import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Films({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={styles.listName}>Films</Text>
      </View>
      
      
      <View style={styles.list}>

      </View>
    </View>
  );
}