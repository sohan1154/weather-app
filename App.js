/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import { StyleSheet, View } from 'react-native';
import TopHeader from './src/components/TopHeader';
import SearchCity from './src/components/SearchCity';

// const App: () => Node = () => {
const App = () => {

  return (
    <View>
      <TopHeader />
      <SearchCity />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
