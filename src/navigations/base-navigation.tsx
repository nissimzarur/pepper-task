import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash-screen/splash-screen';
import HomeScreen from '../screens/home-screen/home-screen';
import LoginScreen from '../screens/login-screen/login-screen';
import ContactsScreen from '../screens/contacts-screen/contacts-screen';
import NewContactScreen from '../screens/new-contact-screen/new-contact-screen';
import ErrorScreen from '../screens/error-screen/error-screen';
import TransferScreen from '../screens/transfer-screen/transfer-screen';

const Stack = createNativeStackNavigator();

const BaseNavigation = () => {

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen}/>
        <Stack.Screen name="NewContact" component={NewContactScreen}/>
        <Stack.Screen name="Transfer" component={TransferScreen}/>
        <Stack.Screen name="Error" component={ErrorScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BaseNavigation;
