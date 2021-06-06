import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorsGame from "./src/components/ColorsGame";
import ShapeGame from "./src/components/ShapeGame";
import Home from "./src/components/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Привет!' }}
            />
            <Stack.Screen
              name="ColorsGame"
              component={ColorsGame}
            />
            <Stack.Screen
                name="ShapeGame"
                component={ShapeGame}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


