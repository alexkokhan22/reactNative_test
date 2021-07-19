import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Form from './Form';
import ModalWindow from './ModalWindow';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


export default function DJIMavicPage() {
    const [modalWindow, setModalWindow] = useState(false)
    return (
        <ScrollView style={styles.container}>
            <KeyboardAwareScrollView>
                <ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>
                <View style={styles.boxImage}>
                    <Image style={styles.img} source={require('../../assets/image/img3.png')}/>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Ordinary quadcopter</Text>
                    <Text style={styles.textName}>DJI Mavic Mini</Text>
                    <Text style={styles.textPrice}> 990.90 $</Text>
                    <Text style={styles.textDescription}>
                        The Mavic 2 offers iconic Hasselblad image quality on Pro
                        and a high-performance zoom lens on Zoom.
                    </Text>
                </View>
                <Form setModalWindow={setModalWindow}/>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        padding: 15,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff'
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
        marginBottom: 5,
        fontFamily: 'LatoRegular'
    },
    textName: {
        color: '#1F1F1F',
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 10,
        fontFamily: 'LatoBold'
    },
    textPrice: {
        color: '#317AE8',
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 10,
        fontFamily: 'LatoRegular'
    },
    textDescription: {
        color: '#939399',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10,
        fontFamily: 'LatoRegular'
    },


});
