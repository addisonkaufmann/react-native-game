import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Item, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LetterTile from './LetterTile';


type Props = {
  	word: string, 
  	isVisible: boolean, 
    show: boolean
};
export default class LetterTileRow extends Component<Props> {

	render() {
		return (
			<Row style={{margin: 5}}>  

              {
                this.props.word.split('').map( (char, charIndex) => {
                  return (
                    <LetterTile key={this.props.word+charIndex} letter={char} isLetterVisible={this.props.isVisible || this.props.show} isTileVisible={this.props.isVisible}/>
                  );
                })
              }
            </Row>
		);
	}       
}



