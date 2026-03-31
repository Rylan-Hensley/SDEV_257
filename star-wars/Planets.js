import React from "react";
import { View, Text, Button, StatusBar, Flatlist } from "react-native";
import styles from "./styles";

export default function Planets({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.listName}>
        <Text>Planets</Text>
      </View>
      
      <View style={styles.list}>
        
      </View>

      <View style={styles.nav}>      
        <Button
          title="Films"
          onPress={() => navigation.navigate("Films")}
        />
        <Button
          title="Planets"
          onPress={() => navigation.navigate("Planets")}
        />
        <Button
          title="Spaceships"
          onPress={() => navigation.navigate("Spaceships")}
        /></View>
    </View>
  );
}