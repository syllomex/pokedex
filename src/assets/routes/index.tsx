import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../../screens/Landing';
import PokeList from '../../screens/PokeList';

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => (
  <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
    <Screen name="Landing" component={Landing} />
    <Screen name="PokeList" component={PokeList} />
  </Navigator>
);

export default Stack;
