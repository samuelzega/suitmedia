import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, isReadyRef} from './RootNavigation';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import UserScreen from '../screens/User';
import WebviewScreen from '../screens/Webview';

const Stack = createNativeStackNavigator();
const screenOption = {headerShown: false};

function Routes() {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        <Stack.Screen
          options={screenOption}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={screenOption}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={screenOption}
          name="User"
          component={UserScreen}
        />
        <Stack.Screen
          options={screenOption}
          name="Webview"
          component={WebviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
