import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Form from './Form';
import ModalWindow from './ModalWindow';
import {styles} from './ProductsPageStyle'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


export default function DJIMatricePage() {
    const [modalWindow, setModalWindow] = useState(false)
    return (
        <ScrollView style={styles.container}>
            <KeyboardAwareScrollView>
                <ModalWindow modalWindow={modalWindow} setModalWindow={setModalWindow}/>
                <View style={styles.boxImage}>
                    <Image style={styles.img} source={require('../../assets/image/img4.png')}/>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Ordinary quadcopter</Text>
                    <Text style={styles.textName}>DJI’s Matrice 200</Text>
                    <Text style={styles.textPrice}>2780.30 $</Text>
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


