import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Righteous from './src/assets/fonts/Righteous/Righteous-Regular.ttf';
import Stack from './src/assets/routes';

// import DatabaseProvider from './src/database/provider';

export default function App () {
  const [loaded] = useFonts({
    Righteous,
  });

  const [loading, setLoading] = useState(true);

  return null;

  // return (
  //   <DatabaseProvider setLoading={setLoading}>
  //     {loading || !loaded ? (
  //       <AppLoading />
  //     ) : (
  //       <NavigationContainer>
  //         <Stack />
  //         <StatusBar style="dark" translucent />
  //       </NavigationContainer>
  //     )}
  //   </DatabaseProvider>
  // );
}
