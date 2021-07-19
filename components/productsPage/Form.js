import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';


export default function Form({setModalWindow}) {
    return (
        <SafeAreaView style={styles.container}>
            <Formik
                onSubmit={(values, actions) => {
                    setModalWindow(true)
                    actions.resetForm()
                }}
                initialValues={{name: '', phone: ''}}>
                {(props) => {
                    return <View>
                        <View>
                            <TextInput
                                style={styles.input}
                                value={props.values.name}
                                placeholder={'Имя'}
                                onChange={props.handleChange('name')}
                            />
                        </View>

                        <View behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <TextInput
                                style={styles.input}
                                keyboardType={'phone-pad'}
                                value={props.values.phone}
                                placeholder={'Номер телефона'}
                                onChange={props.handleChange('phone')}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                                <Text style={styles.textButton}>Заказать</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginBottom: 25
    },
    input: {
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#E7E7E7'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#317AE8',
        width: 343,
        height: 46,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'LatoRegular'
    }
});
