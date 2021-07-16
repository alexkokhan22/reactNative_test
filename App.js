import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Main from "./components/main/Main";
import Header from "./components/header/Header";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header/>
                <Main/>
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
});
