import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Righteous from './src/assets/fonts/Righteous/Righteous-Regular.ttf';
import Stack from './src/assets/routes';

import openRealm from './src/database';

export default function App () {
  const [loaded] = useFonts({
    Righteous,
  });

  useEffect(() => {
    openRealm();
  }, []);

  if (!loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
