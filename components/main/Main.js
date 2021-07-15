import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Buttons from "./Buttons";
import Products from "./Products";
import img2 from "../../assets/image/img2.png"
import img3 from "../../assets/image/img3.png"
import img4 from "../../assets/image/img4.png"



export default function Main() {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'DJI Air 2s',
            image: img2,
            price: '1424$',
            rating: '4.2'
        },

        {
            id: '2',
            title: 'DJI Mavic Mini',
            image: img3,
            price: '990.90$',
            rating: '4.5'
        },

        {
            id: '3',
            title: 'DJI’s Matrice 200',
            image: img4,
            price: '2780.30$',
            rating: '3.8'
        }
    ])

    return (
        <SafeAreaView style={styles.container}>

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

            <View style={styles.buttonsBox}>
                <Buttons title={'All'}/>
                <Buttons title={'Cheap'}/>
                <Buttons title={'Best'}/>
                <Buttons title={'Fast'}/>
            </View>

            <View style={styles.productBox}>
                <Products products={products}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: '#317AE8',
        height: 164,
        padding: 15
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
    },
    buttonsBox: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    productBox: {
        padding: 15
    }

});
