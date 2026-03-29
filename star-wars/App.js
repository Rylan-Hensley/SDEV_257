
import * as React from "react";
import { NavigationContainer } from 
  "@react-navigation/native";
import { createNativeStackNavigator } from 
  "@react-navigation/native-stack";
import Planets from "./Planets";
import Films from "./Films";
import Spaceships from "./Spaceships";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Planets" component={Planets} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="Spaceships" component={Spaceships} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}