import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      list:[

      ]
    };
  }
  render() {
    return (
      <FlatList



      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
