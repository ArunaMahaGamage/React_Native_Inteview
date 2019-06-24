/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

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
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  };
    return (
      <View style={{ flex: 1}}>
      <ImageBackground source={pic} style={[styles.background, styles.container]} resizeMode="cover">
        
      <View style={styles.container} />
      <View style={styles.wrapper}>
        <View style={styles.inputIconWrap}>
        <View style={styles.iconWrap}>
              <Image
                source={personIcon}
                style={styles.images}
                resizeMode="contain"
              />
            </View>
          
        </View>

        <View style={styles.inputIconWrap}>
          
        </View>
        
          
          
          <TouchableOpacity activeOpacity={.5}
            onPress={() =>
              this.props.navigation.navigate('SiginUp')
            }
          >
            <View>
              <Text style={styles.resetPIN}>Reset your PIN
              </Text>
            </View>
          </TouchableOpacity>

          <View>
              <Text style={styles.forgotPasswordText}>Reset PIN
              </Text>
            </View>

            
            <TouchableOpacity activeOpacity={.5}
            onPress={() =>
              this.props.navigation.navigate('SiginUp')
            }
          >
            <View>
              <Text style={styles.forgotPasswordText}>Enter Pin Again
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
  eSpace: {
    width: 1,
    height: 5,
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
  inputIconWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
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
  images: {
    width: 50,
    height: 50,
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
  resetPIN: {
    color: "#d73352",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 22
  },
  forgotPasswordText: {
    color: "#d73352",
    backgroundColor: "transparent",
    textAlign: "center"
  },
});
