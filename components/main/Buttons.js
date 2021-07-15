import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Buttons({title}) {
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                }}
            >
                <Text>{title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#317AE8',
        borderRadius: 5,
        width: 78,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
