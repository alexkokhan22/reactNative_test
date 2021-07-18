import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './components/navigation/Navigation';
import * as Fonts from 'expo-font'
import AppLoading from "expo-app-loading";


export default function App() {
    const fonts = async () => {
        await Fonts.loadAsync({
            'LatoRegular': require('./assets/fonts/Lato-Regular.ttf'),
            'LatoBold': require('./assets/fonts/Lato-Bold.ttf')
        })
    }
    const [font, setFont] = useState(false)
    if (font) {
        return (
            <SafeAreaView style={styles.container}>
                <Navigation/>
            </SafeAreaView>
        );
    } else {
        return <AppLoading
            startAsync={fonts}
            onFinish={() => setFont(true)}
            onError={console.warn}
        />
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        flexDirection: 'column',
    },
});
