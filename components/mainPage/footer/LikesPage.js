import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function LikesPage() {
    return (
        <View style={styles.textContainer}>
            <Text>Likes</Text>
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