import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


type Props = {
  letter: string,
  isLetterVisible: boolean, 
  isTileVisible: boolean
};
export default class LetterTile extends Component<Props> {

  render() {
    return (
		<View style={{backgroundColor: this.props.isTileVisible ?  '#3F51B5' : '#DCDCDC', height: 24, width: 16, margin: 2, borderRadius: 4, justifyContent: 'center'}}>
			<Text style={{fontSize: 14, color: 'white', alignSelf: 'center'}}>{this.props.isLetterVisible ? this.props.letter.toUpperCase() : ' '}</Text>
		</View>
    );
  }       
}


