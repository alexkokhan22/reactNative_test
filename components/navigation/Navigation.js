import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Main from "../mainPage/main/Main";
import LikesPage from "../mainPage/footer/LikesPage";
import SearchPage from "../mainPage/footer/SearchPage";
import PurchasesPage from "../mainPage/footer/PurchasesPage";
import DJIMavicPage from "../productsPage/DJIMavicPage";
import DJIMatricePage from "../productsPage/DJIMatricePage";
import DJIAirPage from "../productsPage/DJIAirPage";


const Stack = createStackNavigator()

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'main'}
                    component={Main}
                    options={{title: ''}}
                />
                <Stack.Screen
                    name={'likes'}
                    component={LikesPage}
                />
                <Stack.Screen
                    name={'search'}
                    component={SearchPage}
                />
                <Stack.Screen
                    name={'purchases'}
                    component={PurchasesPage}
                />
                <Stack.Screen
                    name={'djiAirPage'}
                    component={DJIAirPage}
                    options={{title: 'DJI Air 2s'}}
                />
                <Stack.Screen
                    name={'djiMavicPage'}
                    component={DJIMavicPage}
                    options={{title: 'DJI Mavic Mini'}}
                />
                <Stack.Screen
                    name={'dijMatricePage'}
                    component={DJIMatricePage}
                    options={{title: 'DJI’s Matrice 200'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}