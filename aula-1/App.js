import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './src/components/Welcome';

import styles from './styles';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome greeting="Primeira vez aqui?" />
      </View>
    );
  }
}

export default App;
