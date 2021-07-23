import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
        padding: 5,
        marginBottom: 13
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
        fontFamily: 'LatoBold'
    },
    textDescription: {
        color: '#939399',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10,
        fontFamily: 'LatoRegular'
    }
})