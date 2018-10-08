/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



type Props = {
  seconds: number
};
export default class IconButton extends Component<Props> {
  render() {
    return (
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        {Math.floor(this.props.seconds/60) + ":" + (this.props.seconds%60 < 10 ? "0" + this.props.seconds%60 :this.props.seconds%60) }
      </Text>
    );
  }       
}



