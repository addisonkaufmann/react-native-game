/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



type Props = {
  value: string,
  isVisible: boolean,
  onPress: any, 
  index: number, 
  disabled: boolean
};
export default class LetterButton extends Component<Props> {

  render() {
    if (!this.props.isVisible){
      return null;
    }

    const style = this.props.disabled ? styles.disabled : styles.button;

    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={() => this.props.onPress(this.props.index)}>
        <Text style={styles.text}>{this.props.value.toUpperCase()}</Text>
      </TouchableOpacity>

    );
  }       
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
    width: 50, 
    height: 50, 
    borderRadius: 25
  }, 
  disabled: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 50, 
    height: 50, 
    borderRadius: 25
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'white'
  }
});
