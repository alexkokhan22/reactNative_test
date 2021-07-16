import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';


export default function Footer({loadScene}) {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => loadScene('main')}>
                <Feather name="home" size={24} color="black"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => loadScene('likes')}>
                <AntDesign name="hearto" size={24} color="black"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => loadScene('search')}>
                <Ionicons name="md-search-outline" size={24} color="black"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => loadScene('purchases')}>
                <SimpleLineIcons name="basket" size={24} color="black"/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 96,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff'
    }
});
