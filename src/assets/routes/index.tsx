import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../../screens/Landing';
import PokeList from '../../screens/PokeList';
import PokeDetails from '../../screens/PokeDetails';

const { Navigator, Screen } = createStackNavigator();

const Stack: React.FC = () => (
  <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
    <Screen name="Landing" component={Landing} />
    <Screen name="PokeList" component={PokeList} />
    <Screen
      name="PokeDetails"
      component={PokeDetails}
      options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: { elevation: 0 },
        headerTransparent: true,
      }}
    />
  </Navigator>
);

export default Stack;
