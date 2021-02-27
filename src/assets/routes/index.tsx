import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../../screens/Landing';

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => (
  <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
    <Screen name="Landing" component={Landing} />
  </Navigator>
);

export default Stack;
