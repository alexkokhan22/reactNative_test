import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign, Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';


export default function Footer({loadScene}) {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => loadScene('main')}>
                <Feather name='home' size={24} color='#317AE8'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={() => loadScene('likes')}>
                <AntDesign name='hearto' size={24} color='#939399'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={() => loadScene('search') && setActive(true)}>
                <Ionicons name='md-search-outline' size={24} color='#939399'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={() => loadScene('purchases') && setActive(true)}>
                <SimpleLineIcons name='basket' size={24} color='#939399'/>
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
        alignItems: 'center',
        height: 96,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff'
    },
    icon: {
        height: 25,
    }
});
