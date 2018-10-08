/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



type Props = {
  type: string,
  onPress: any,
  disabled: boolean
};
export default class IconButton extends Component<Props> {

  render() {
    return (
      <TouchableOpacity disabled={this.props.disabled} style={styles.button} onPress={this.props.onPress}>
        <Icon style={styles.icon} android={`md-${this.props.type}`} ios={`ios-${this.props.type}`} />
      </TouchableOpacity>
    );
  }       
}

const styles = StyleSheet.create({
  button: {
    width: 50, 
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 2, 
    borderColor: '#3F51B5', 
    borderRadius: 25, 
    alignSelf: 'center'
  }, 
  icon: {
    fontSize: 24, 
    color: '#3F51B5'
  }
})

