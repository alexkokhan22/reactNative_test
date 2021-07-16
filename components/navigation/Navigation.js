import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Main from "../main/Main";
import Likes from "../footer/Likes";
import Search from "../footer/Search";
import Purchases from "../footer/Purchases";


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
                    component={Likes}
                />
                <Stack.Screen
                    name={'search'}
                    component={Search}
                />
                <Stack.Screen
                    name={'purchases'}
                    component={Purchases}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}