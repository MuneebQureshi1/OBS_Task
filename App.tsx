//Add Google API key in main androidmanifest.xml file

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Toast from 'react-native-toast-message';
import RootStack from './src/navigation/RootStack';


export default function App() {
  return (
    <NavigationContainer >
      <NativeBaseProvider>
        <RootStack />
        <Toast position="bottom" bottomOffset={20} />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}