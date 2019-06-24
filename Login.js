/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class Vertical extends Component {
  state = {
    data: [
      {
        label: '0',
        value: "0",
      },
      {
        label: '1',
        value: "1",
      },
      {
        label: '2',
        value: "2",
      },
      {
        label: '3',
        value: "3",
      },
    ],
  };

  // update state
  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginBottom: 50 }}>
          Value = {selectedButton}
        </Text>
        <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});