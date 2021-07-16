import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from "./components/navigation/Navigation";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        flexDirection: 'column',
    },
});
