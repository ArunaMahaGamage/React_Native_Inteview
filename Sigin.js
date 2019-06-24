/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const background = require("./background.jpg");
const lockIcon = require("./lock.png");
const personIcon = require("./person.png");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
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
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
  let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <View style={{ flex: 1}}>
      <ImageBackground source={pic} style={[styles.background, styles.container]} resizeMode="cover">

      <View style={styles.container} />
      <View style={styles.wrapper}>

      <View style={styles.inputWrap}>
      <TextInput
              placeholder="Enter PIN to unlock"
              style={styles.inputHeader}
              underlineColorAndroid="transparent"
            />
        </View>

        <View style={styles.radioGroup}>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row'/>
        </View>

        <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
              <Image
                source={personIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Username"
              style={styles.input}
              underlineColorAndroid="transparent"
            />
        </View>

        <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image
                source={lockIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity activeOpacity={.5}
          onPress={() =>
            this.props.navigation.navigate('CListview')
          }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}
            onPress={() =>
              this.props.navigation.navigate('SiginUp')
            }
          >
            <View>
              <Text style={styles.createAccount}>Create Account
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.createAccount}>Or
              </Text>
            </View>
            </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}
            onPress={() =>
              this.props.navigation.navigate('SiginUp')
            }
          >
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?
              </Text>
            </View>
          </TouchableOpacity>
      </View>
      <View style={styles.container} />
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null,
  },
  wrapper: {
    paddingHorizontal: 15,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent"
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  inputHeader: {
    textAlign: 'center',
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFF'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d73352"
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#d73352",
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#d73352",
    backgroundColor: "transparent",
    textAlign: "center"
  },
  createAccount: {
    color: "#13dd1e",
    backgroundColor: "transparent",
    textAlign: "center"
  },
  radioGroup: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    color: "#13dd1e",
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center'
  },
});
