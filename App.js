import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomeStack} from './src/router';

export default class App extends React.Component {
  render() {
    return (
      <HomeStack/>
     /*<View>
        <Text>Home</Text>
      </View>*/
    );
  }
}