import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BaseNavigation from './src/navigations/base-navigation';
import {Text, View} from 'react-native';
import {CircularProgressBar, Spinner} from '@ui-kitten/components';
import Toast from 'react-native-toast-message';
import appStore from './src/stores/app/app-store';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <BaseNavigation />
      </NavigationContainer>
      <Toast onHide={()=>appStore.clearError()}/>
    </>
  );
}

export default App;
