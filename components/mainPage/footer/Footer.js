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

            <TouchableOpacity style={styles.icon} onPress={() => loadScene('search')}>
                <Ionicons name='md-search-outline' size={24} color='#939399'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={() => loadScene('purchases')}>
                <SimpleLineIcons name='basket' size={24} color='#939399'/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 96,
        borderWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 16,
        shadowOffset: {width: 2, height: 2}
    },
    icon: {
        height: 25,
    }
});
