import React from "react";
import { View, Text, Button, StatusBar, Flatlist } from "react-native";
import styles from "./styles";

export default function Planets({ navigation }) {

  const handleItems = () => {
    console.log(Planets);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={styles.listName}>Planets</Text>
      </View>
      
      <View style={styles.list}>
        
      </View>
    </View>
  );
}