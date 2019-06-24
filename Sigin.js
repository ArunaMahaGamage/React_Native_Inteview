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

const num1 = require("./num1.png");
const num2 = require("./num2.png");
const num3 = require("./num3.png");

const num4 = require("./num4.png");
const num5 = require("./num5.png");
const num6 = require("./num6.png");

const num7 = require("./num7.png");
const num8 = require("./num8.png");
const num9 = require("./num9.png");

const num0 = require("./num0.png");
const back = require("./back.png");


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

        <View style={styles.inputWrapNum}>
        <View style={styles.iconWrap}>
              <Image
                source={num1}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num2}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num3}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
        </View>

        <View style={styles.inputWrapNum}>
            <View style={styles.iconWrap}>
              <Image
                source={num4}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num5}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num6}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            
          </View>

          <View style={styles.inputWrapNum}>
            <View style={styles.iconWrap}>
              <Image
                source={num7}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num8}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num9}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            
          </View>

          <View style={styles.inputWrapNum}>
            <View style={styles.iconWrapEmpty}>
            <Image
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={num0}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.iconWrap}>
              <Image
                source={back}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            
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
              <Text style={styles.createAccount}>Forget PIN ?
              </Text>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={.5}
            onPress={() =>
              this.props.navigation.navigate('SiginUp')
            }
          >
            <View>
              <Text style={styles.createAccount}>Tap here to reset
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
  inputWrapNum: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",
    justifyContent: 'space-evenly'
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
  iconWrapEmpty: {
    width: null,
    height: null,
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    
  },
  iconWrap: {
    width: null,
    height: null,
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
