import {StyleSheet, Text, TouchableOpacity, View, Button} from "react-native";
import React, { useState } from 'react';
import {StatusBar} from "expo-status-bar";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
                <Text style={{
                    fontSize: 32,
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    color: 'yellow',
                    textShadow: '2px 2px 2px rgba(150, 150, 150, 1)',
                    marginBottom: 30,
                }}>ПРИВЕТ, СЕВА !!!</Text>
                <TouchableOpacity style={{
                    marginBottom: 20,
                    backgroundColor: 'orange',
                    paddingVertical: 10,
                    paddingHorizontal: 35,
                    borderRadius: 15,
                }} onPress={() => navigation.navigate('ColorsGame')}>
                    <Text
                        style={{
                            fontWeight: 700,
                            fontSize: 24,
                            color: '#fff',
                            textShadow: '2px 2px 2px rgba(150, 150, 150, 1)',
                        }}
                    >
                        ЦВЕТА / COLORS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginBottom: 20,
                    backgroundColor: 'orange',
                    paddingVertical: 10,
                    paddingHorizontal: 35,
                    fontWeight: 700,
                    borderRadius: 15,
                    fontSize: 24,
                }} onPress={() => navigation.navigate('ShapeGame')}>
                    <Text
                        style={{
                            fontWeight: 700,
                            fontSize: 24,
                            color: '#fff',
                            textShadow: '2px 2px 2px rgba(150, 150, 150, 1)',
                        }}
                    >
                       ФИГУРЫ / SHAPES
                    </Text>
                </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightseagreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
});