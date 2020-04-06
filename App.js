import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { Block, Text } from 'expo-ui-kit'


//importing drawer navigator
import Drawer from './Drawer';
export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
      {/* <Block center middle >
        <Text >Drawer Menu Navigation</Text>
        <Text bold>rect-navigation v5</Text>
      </Block> */}
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
