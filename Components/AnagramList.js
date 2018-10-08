import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Item, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LetterTileRow from './LetterTileRow';


type Props = {
  	anagrams: Array<string>,
  	mask: Array<boolean>, 
    showAll: boolean
};
export default class AnagramList extends Component<Props> {

	render() {

		return (
			<Grid> 
        <Row/>
        {this.props.anagrams.slice().map((item, index) => {
            return (
              <LetterTileRow key={item} word={item} isVisible={this.props.mask[index]} show={this.props.showAll}/>
            );
          })
        }
        <Row/>
      </Grid>
		);
	}       
}


