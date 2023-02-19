import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Playground, Question} from 'screens';
import {NavigationContainer} from '@react-navigation/native';

export default function AppRoutes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Playground" component={Playground} />
        <Stack.Screen name="Question" component={Question} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
