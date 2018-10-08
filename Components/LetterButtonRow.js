/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LetterButton from './LetterButton';


type Props = {
  letters: Array<string>,
  mask: Array<bool>,
  itemPress: any, 
  disabled: boolean
};
export default class LetterButtonRow extends Component<Props> {

  render() {
    if(!this.props.letters.length){
      return null;
    }
    const letters = this.props.letters.slice();

      return (
        <Row>
          {
            letters.map( (item, index) => {
              return (
                <Col key={item + index}>
                  <LetterButton 
                    disabled={this.props.disabled} 
                    isVisible={this.props.mask[index]} 
                    value={item} 
                    onPress={this.props.itemPress} 
                    index={index}
                  />
                </Col>
              );
            })

          }
        </Row>
      ); 

        
    }       
}

