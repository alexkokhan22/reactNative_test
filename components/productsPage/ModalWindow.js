import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Modal from 'react-native-modal'


export default function ModalWindow({modalWindow, setModalWindow}) {
    return (
        <Modal
            style={styles.modalWindow}
            coverScreen={true}
            backdropOpacity={0.60}
            isVisible={modalWindow}
        >
            <View style={styles.container}>
                <Feather name={'truck'} size={80} color={'#317AE8'}/>
                <Text style={styles.text}>Ваш заказ принят</Text>
                <TouchableOpacity style={styles.button} onPress={() => setModalWindow(false)}>
                    <Text style={styles.textButton}>Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalWindow: {
        flex: 0.35,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffff',
        borderRadius: 16,
        top: '30%'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',


    },
    text: {
        marginTop: 5,
        fontSize: 16,
        lineHeight: 22,
        color: '#939399'
    },
    button: {
        marginTop: 10,
        backgroundColor: '#317AE8',
        width: 146,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textButton: {
        color: '#fff'
    }
});
