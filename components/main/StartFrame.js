import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


export default function StartFrame({textFilter, products}) {
    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.firstText}>Need for Speed</Text>
                <Text style={styles.secondText}>UdoDron 3 Pro</Text>
                <Text style={styles.priceText}>1984 $</Text>
            </View>
            <View>
                <Image source={require('../../assets/image/img1.png')} style={styles.image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: '#317AE8',
        height: 164,
        padding: 15,
        marginTop: 20

    },
    firstText: {
        fontSize: 14,
        lineHeight: 17,
        color: '#ffff'
    },
    secondText: {
        fontSize: 24,
        lineHeight: 32,
        color: '#ffff'
    },
    priceText: {
        fontSize: 20,
        lineHeight: 24,
        color: '#ffff'
    },
    image: {
        position: 'absolute',
        bottom: -15,
        left: -40
    }
});
