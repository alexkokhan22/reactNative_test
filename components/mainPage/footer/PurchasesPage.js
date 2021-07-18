import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function PurchasesPage() {
    return (
        <View style={styles.textContainer}>
            <Text>Purchases</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center'
    }
})