import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Form from './Form';
import ModalWindow from './ModalWindow';


export default function DJIAirPage() {
    const [modalWindow, setModalWindow] = useState(false)
    return (
        <ScrollView style={styles.container}>
            <ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>
            <View style={styles.boxImage}>
                <Image style={styles.img} source={require('../../assets/image/img2.png')}/>
            </View>
            <View style={styles.boxText}>
                <Text style={styles.text}>Ordinary quadcopter</Text>
                <Text style={styles.textName}>DJI Air 2S</Text>
                <Text style={styles.textPrice}>1984 $</Text>
                <Text style={styles.textDescription}>
                    The Mavic 2 offers iconic Hasselblad image quality on Pro
                    and a high-performance zoom lens on Zoom.
                </Text>
            </View>
            <Form setModalWindow={setModalWindow}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        padding: 15,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff',
    },
    boxImage: {
        alignItems: 'center',
    },
    img: {
        width: 343,
        height: 281
    },
    boxText: {
        padding: 5
    },
    text: {
        color: '#1F1F1F',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 5
    },
    textName: {
        color: '#1F1F1F',
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 10
    },
    textPrice: {
        color: '#317AE8',
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 10
    },
    textDescription: {
        color: '#939399',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10
    },


});
