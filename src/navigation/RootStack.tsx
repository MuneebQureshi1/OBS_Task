import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import MapScreen from '../screens/MapScreen/MapScreen'

const Stack = createStackNavigator()

export default function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' options={{
                title: 'Login'
            }} component={LoginScreen} />
            <Stack.Screen name='MapScreen' options={{
                headerShown: false,
            }} component={MapScreen} />
        </Stack.Navigator>
    )
}