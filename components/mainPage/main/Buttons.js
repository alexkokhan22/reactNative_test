import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Buttons({filter, changeFilter}) {
    return (
        <SafeAreaView style={styles.buttonsBox}>

            <TouchableOpacity
                style={filter === 'all' ? styles.buttonActive : styles.button}
                onPress={() => changeFilter('all', 'All Quadcopters')}
            >
                <Text style={filter === 'all' ? styles.textActive : styles.text}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={filter === 'cheap' ? styles.buttonActive : styles.button}
                onPress={() => changeFilter('cheap', 'Cheap Quadcopters')}
            >
                <Text style={filter === 'cheap' ? styles.textActive : styles.text}>Cheap</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={filter === 'best' ? styles.buttonActive : styles.button}
                onPress={() => changeFilter('best', 'Best Quadcopters')}
            >
                <Text style={filter === 'best' ? styles.textActive : styles.text}>Best</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={filter === 'fast' ? styles.buttonActive : styles.button}
                onPress={() => changeFilter('fast', 'Fast Quadcopters')}
            >
                <Text style={filter === 'fast' ? styles.textActive : styles.text}>Fast</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonsBox: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    buttonActive: {
        backgroundColor: '#317AE8',
        borderRadius: 12,
        width: 78,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ffff',
        borderRadius: 12,
        width: 78,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E7E7E7',
    },
    textActive: {
        color: '#fff',
        fontFamily: 'LatoRegular'
    },
    text: {
        color: '#000',
        fontFamily: 'LatoRegular'
    }
});
