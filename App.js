import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from "./components/main/Main";
import Header from "./components/header/Header";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Main/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
