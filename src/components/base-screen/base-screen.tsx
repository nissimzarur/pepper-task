import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import IBaseScreen from './base-screen.interfaces';
import Styles from './base-screen.styles';
import {ApplicationProvider, Spinner} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Box from '../box/box';
import appStore from '@app/src/stores/app/app-store';
import {observer} from 'mobx-react';
import Toast from 'react-native-toast-message';
import Spacer from '../controllers/spacer/spacer';

const Screen = observer(({children, ...props}: IBaseScreen) => {
  const {loading, error} = appStore;

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
      });
    }
  }, [error]);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        {loading && (
          <Box style={Styles.loading}>
            <Spinner size='large' status='danger'/>
          </Box>
        )}
        <Spacer size='lg'/>
        {props.scroll ? (
          <ScrollView {...props} style={[Styles.default, props.style]}>
            {children}
          </ScrollView>
        ) : (
          <View {...props} style={[Styles.default, props.style]}>
            {children}
          </View>
        )}
      </SafeAreaView>
    </ApplicationProvider>
  );
});

export default Screen;
