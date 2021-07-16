import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Buttons from "./Buttons";
import Products from "./Products";
import img2 from "../../assets/image/img2.png"
import img3 from "../../assets/image/img3.png"
import img4 from "../../assets/image/img4.png"
import StartFrame from "./StartFrame";
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function Main({navigation}) {
    const [products, setProducts] = useState([
        {
            id: '1',
            title: 'DJI Air 2s',
            image: img2,
            price: 1424,
            rating: 4.2,
            speed: 80
        },

        {
            id: '2',
            title: 'DJI Mavic Mini',
            image: img3,
            price: 990.90,
            rating: 4.5,
            speed: 60
        },

        {
            id: '3',
            title: 'DJI’s Matrice 200',
            image: img4,
            price: 2780.30,
            rating: 3.8,
            speed: 75
        }
    ])

    const [filter, setFilter] = useState('all')
    const [filterText, setFilterText] = useState('All Quadcopters')
    let productsFilter = products

    const changeFilter = (value, text) => {
        setFilter(value)
        setFilterText(text)
    }

    const loadScene = (value) => {
        navigation.navigate(value)
    }

    if (filter === 'all') {
        productsFilter = [...products]

    }
    if (filter === 'best') {
        productsFilter = products.filter(pr => pr.rating >= 4)
    }
    if (filter === 'cheap') {
        let productsCheap = products.reduce((acc, el) => {
            return acc.price < el.price ? acc : el
        })
        productsFilter = [productsCheap]
    }
    if (filter === 'fast') {
        let productsCheap = products.reduce((acc, el) => {
            return acc.speed > el.speed ? acc : el
        })
        productsFilter = [productsCheap]
    }

    return (
        <ScrollView style={styles.container}>
            <Header/>
            <StartFrame/>
            <Buttons filter={filter} changeFilter={changeFilter}/>
            <Products text={filterText} products={productsFilter}/>
            <Footer loadScene={loadScene}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff'
    }
});
