import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Righteous from './src/assets/fonts/Righteous/Righteous-Regular.ttf';
import Stack from './src/assets/routes';

export default function App () {
  const [loaded] = useFonts({
    Righteous,
  });

  if (!loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
