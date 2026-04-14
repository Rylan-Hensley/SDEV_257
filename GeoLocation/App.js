import React from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <View style={styles.container}>

      <MapView style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation
        followUserLocation
      >

        <Marker 
          title="Skyline Chili"
          description="Nearest Restaraunt"
          coordinate={{
            latitude: 40.04008048595857,
            longitude: -85.71902357545649,
          }}
        />

      </MapView>

    </View>
  );
}