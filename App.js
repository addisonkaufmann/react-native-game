/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Modal} from 'react-native';
import { Container, Header, Content, Button, Text, Item, List, Icon, Title, Body, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Game from './Game';
import LetterButton from './Components/LetterButton';
import LetterButtonRow from './Components/LetterButtonRow';
import LetterTile from './Components/LetterTile';
import LetterTileRow from './Components/LetterTileRow';
import AnagramList from './Components/AnagramList';
import IconButton from './Components/IconButton';
import TimerText from './Components/TimerText';
import SettingsModal from './Components/SettingsModal';

const NUM_LETTERS = 6;
const NUM_ANAGRAMS = 30;

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.interval = setInterval(() => this.tick(), 1000);
    this.state = {
      letters: [],
      word: [], 
      letterMask: Array(NUM_LETTERS).fill(true), 
      history: [],
      lastWord: [], 
      lastLetterMask: [], 
      lastHistory: [],
      anagrams: [],
      anagramMask: Array(NUM_ANAGRAMS).fill(false), 
      seconds: 60,
      gameOver: false, 
      settings: false
    }
    
  }

  componentDidMount(){
    this.newGame();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.seconds == 0){
      this.endGame();
      return;
    }
    this.setState({
      seconds: this.state.seconds-1
    });
  }

  endGame = () => {
    this.setState({
      letterMask: Array(NUM_LETTERS).fill(true), 
      gameOver: true, 
      word: []
    });
  };



  newGame = () => {
    this.game = new Game();
    const letters = this.game.getScramble();
    const anagrams = this.game.getAnagrams();

    this.setState({
      letters: letters,
      word: [], 
      letterMask: Array(NUM_LETTERS).fill(true), 
      history: [],
      anagrams: anagrams,
      anagramMask: Array(NUM_ANAGRAMS).fill(false), 
      lastWord: [], 
      lastLetterMask: Array(NUM_LETTERS).fill(true),
      lastHistory: [], 
      seconds: 60, 
      gameOver: false
    });

  };

  letterPress = (i) => {
    let hist = this.state.history.slice();
    hist.push(i);
    let word = this.state.word.slice();
    word.push(this.state.letters[i]);
    let mask = this.state.letterMask;
    mask[i] = false;
    this.setState({
      letterMask: mask,
      word: word,
      history: hist
    });
  };


  deleteLetter = () => {
    let history = this.state.history.slice();
    const index = history.pop();
    let mask = this.state.letterMask;
    mask[index] = true;

    let word = this.state.word.slice();
    word.pop();

    this.setState({
      letterMask: mask, 
      history: history,
      word: word
    })
  };

  scrambleLetters = () => {
    const scrambled = this.game.getScramble();
    this.clearWord();
    this.setState({
      letters: scrambled
    });
  };

  lastWord = () => {
    const word = this.state.lastWord;
    const hist = this.state.lastHistory;
    const mask = this.state.lastLetterMask;
    this.setState({
      word: word,
      history: hist,
      letterMask: mask
    })

  };

  clearWord = () => {
    const lastWord = this.state.word;
    const lastHist = this.state.history;
    const lastLetMask = this.state.letterMask;
    const word = [];
    const mask = Array(NUM_LETTERS).fill(true);

    this.setState({
      word: word, 
      letterMask: mask,
      history: [], 
      lastWord: lastWord, 
      lastHistory: lastHist,
      lastLetterMask: lastLetMask
    });
  };

  openSettings = () => {
    this.setState({
      settings: true
    })
  };

  closeSettings = () => {
    this.setState({
      settings: false
    })
  };

  checkWord = () => {
    const word = this.state.word.join('');
    if (this.game.isAnagram(word)){
      const mask = this.state.anagramMask.slice();
      const index = this.state.anagrams.indexOf(word);
      mask[index] = true;

      this.setState({
        anagramMask: mask, 
      });
    };
    this.clearWord();
  };

  render() {
      return (
        <Container >
        <SettingsModal isVisible={this.state.settings} close={this.closeSettings}/>

          <Header>
            <Left style={{flex: 1}}>
            <Button transparent onPress={this.openSettings}>
                <Icon android="md-settings" ios="ios-settings" />
              </Button>
            </Left>
            <Body style={{flex: 1}}>
              <Title style={{alignSelf: 'center'}}>
                <TimerText seconds={this.state.seconds}/>
              </Title>
            </Body>
            <Right style={{flex: 1}} >
              <Button transparent onPress={this.newGame}>
                <Icon android="md-play" ios="ios-play" />
              </Button>
            </Right>
          </Header>

          <Grid>
            <Row size={50}>
                <Grid >
                  <Col>
                    <AnagramList anagrams={this.state.anagrams.slice(0,NUM_ANAGRAMS/3)} mask={this.state.anagramMask.slice(0,NUM_ANAGRAMS/3)} showAll={this.state.gameOver} />    
                    </Col>
                    <Col>
                      <AnagramList anagrams={this.state.anagrams.slice(NUM_ANAGRAMS/3,2*(NUM_ANAGRAMS/3))} mask={this.state.anagramMask.slice(NUM_ANAGRAMS/3,2*(NUM_ANAGRAMS/3))} showAll={this.state.gameOver}/>
                    </Col>
                    <Col>
                       <AnagramList anagrams={this.state.anagrams.slice(2*(NUM_ANAGRAMS/3),NUM_ANAGRAMS)} mask={this.state.anagramMask.slice(2*(NUM_ANAGRAMS/3),NUM_ANAGRAMS)} showAll={this.state.gameOver}/>
                    </Col>
                </Grid>
              </Row>
              <Row size={40}>
                <Grid>
                  <Row style={{justifyContent: 'center'}}>

                    <Col size={100/NUM_LETTERS}>
                    <IconButton type="shuffle" disabled={this.state.gameOver} onPress={this.scrambleLetters}/>
                    </Col>
                    <Col size={100/NUM_LETTERS}>
                    <IconButton type="refresh" disabled={this.state.gameOver} onPress={this.lastWord}/>
                      
                    </Col>
                    <Col size={100-(400/NUM_LETTERS)}>
                      <Text style={styles.word} >{this.state.word.join('').toUpperCase()}</Text>
                    </Col>
                    <Col size={100/NUM_LETTERS}>
                    <IconButton type="backspace" disabled={this.state.gameOver} onPress={this.deleteLetter}/>
                      
                    </Col>
                    <Col size={100/NUM_LETTERS}>
                      <IconButton type="checkmark-circle" disabled={this.state.gameOver} onPress={this.checkWord}/>

                    </Col>
                  </Row>
                  <LetterButtonRow disabled={this.state.gameOver} letters={this.state.letters} mask={this.state.letterMask} itemPress={this.letterPress}/>

                </Grid>
              </Row>
          </Grid>

        </Container>  
 
      );
    }       
}

const styles = StyleSheet.create({
  word: {
    color: '#3F51B5', 
    textAlign: 'center',
    fontSize: 25, 
    fontWeight: 'bold'
  }
});

