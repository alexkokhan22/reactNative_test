import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
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
                        <TextInput
                            style={styles.input}
                            value={props.values.name}
                            placeholder={'Имя'}
                            onChange={props.handleChange('name')}
                        />
                        <TextInput
                            style={styles.input}
                            keyboardType={'phone-pad'}
                            value={props.values.phone}
                            placeholder={'Номер телефона'}
                            onChange={props.handleChange('phone')}
                        />
                        <View>
                            <Button  title={'Заказать'} onPress={props.handleSubmit}/>
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
    modalTrue: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    modalWindow: {
        position: 'absolute',
        top: 200,
        left: 30,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 343,
        height: 248
    }
});
