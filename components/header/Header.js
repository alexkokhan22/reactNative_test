import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Quadrojoy</Text>
            <Ionicons style={styles.icon} name="md-menu-outline" size={32} color="#1F1F1F"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 72,
        marginTop: 60,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#1F1F1F',
        fontSize: 24,
        lineHeight: 32
    },
    icon: {
        color: '#1F1F1F',
        lineHeight: 32
    }
});
