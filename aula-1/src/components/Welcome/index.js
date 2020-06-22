import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Seja bem vindo!',
    };
  }

  render() {
    const { greeting } = this.props;
    const { message } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Olá! {greeting}</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Welcome.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Welcome;
