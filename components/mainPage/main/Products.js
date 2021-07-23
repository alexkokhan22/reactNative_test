import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function Products({text, products, loadScene}) {
    return (
        <View style={styles.productBox}>
            <View>
                <Text style={styles.filterText}>{text}</Text>
            </View>

            <View style={styles.containerProducts}>
                {products.map(pr => {
                    return (
                        <TouchableOpacity onPress={() => loadScene(pr.pageName)} style={styles.boxProducts} key={pr.id}>
                            <View>
                                <Image style={styles.img} source={pr.image}/>
                            </View>
                            <View style={styles.boxText}>
                                <Text style={styles.text}>{pr.title}</Text>
                                <View style={styles.boxPrice}>
                                    <View>
                                        <Text style={styles.textPrice}>{pr.price} $</Text>
                                    </View>
                                    <View style={styles.boxRating}>
                                        <View style={styles.boxStar}>
                                            <AntDesign name="star" size={18} color="gold"/>
                                        </View>
                                        <View>
                                            <Text style={styles.textRating}>{pr.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    filterText: {
        marginTop: 12,
        marginBottom: 10,
        color: '#1F1F1F',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'LatoBold',
    },
    productBox: {
        padding: 15
    },
    containerProducts: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    boxProducts: {
        width: 204,
        height: 248,
        borderRadius: 12,
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        marginTop: 10
    },
    img: {
        width: 198,
        height: 168
    },
    boxText: {
        padding: 10
    },
    boxPrice: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxRating: {
        flexDirection: 'row',
        padding: 4,
    },
    boxStar: {
        marginRight: 5,
    },
    text: {
        marginTop: 2,
        color: '#1F1F1F',
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'LatoBold',
    },
    textPrice: {
        color: '#1F1F1F',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'LatoBold',
    },
    textRating: {
        color: '#1F1F1F',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'LatoBold'
    }
});
