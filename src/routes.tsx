import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FormPeopleScreen from './Screens/FormScreen';
import {HomeScreen} from './Screens/Home';
import PaymentScreen from './Screens/PaymentScreen';
import {SeatScreen} from './Screens/SeatScreen';
import WelconScreen from './Screens/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelconScreen}
          options={{
            statusBarColor: '#f0c505',
            headerShown: false,
            gestureEnabled: false,
            navigationBarHidden: true,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            statusBarColor: '#f0c505',
            headerShown: false,
            gestureEnabled: false,
            navigationBarHidden: true,
          }}
        />
        <Stack.Screen
          name="Seat"
          component={SeatScreen}
          options={{
            statusBarColor: '#f0c505',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            statusBarColor: '#f0c505',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="FormPeople"
          component={FormPeopleScreen}
          options={{
            statusBarColor: '#f0c505',
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
