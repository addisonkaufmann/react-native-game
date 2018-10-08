import React, {Component} from 'react';
import { Platform, StyleSheet, View, Modal, TouchableHighlight, Form, Alert, BackHandler } from 'react-native';
import { Container, Header, Content, Button, Text, Icon, List, ListItem, Picker, Left, Right,Body, Radio, Card, CardItem, Title, Switch, Item} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SettingsDivider from './SettingsDivider';


type Props = {
  isVisible: boolean, 
  close: any
};

export default class SettingsModal extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      timeRadio: [true, false, false], 
      timeLimit: 1, 
      vocabulary: "medium", 
      showAnagrams: true,
      alphabetizeAnagrams: true, 
      englishSpelling: false
    }
  }

  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  handleBack(){
    this.props.close();
  }

  timeRadioChange = (index) => {
    console.log(index);
    console.log(this.state.timeRadio);
    const blank = Array(3).fill(false);
    blank[index] = true;
    this.setState({
      timeRadio: blank
    });
  };

  hasTimeLimitChange = (e) => {
    this.setState({
      hasTimeLimit: e
    });
  };

  timeLimitChange = (e) => {
    this.setState({
      timeLimit: e
    });
  };

  vocabularyChange = (e) => {
    this.setState({
      vocabulary: e
    });
  };

  showAnagramsChange = (e) => {
    this.setState({
      showAnagrams: e
    });
  };

  alphabetizeChange = (e) => {
    this.setState({
      alphabetizeAnagrams: e
    });
  };

  englishSpellingChange = (e) => {
    this.setState({
      englishSpelling: e
    });
  };

  render() {
    return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.isVisible}
          onRequestClose={this.props.close}>
            
          <Container>


     
            <Header>
          <Left style={{flex: 1}}>            
            <Button transparent onPress={this.props.close}>
              <Icon style={{color: 'white', fontSize: 32}} android="md-close-circle" ios="ios-close-circle"/>
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Title style={{alignSelf: 'center'}}>
              Settings
            </Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent onPress={this.props.close}>
              <Icon style={{color: 'white',  fontSize: 32}} android="md-checkmark-circle" ios="ios-checkmark-circle"/>
            </Button>
          </Right>
        </Header>

        <Grid style={{backgroundColor: '#E8E8E8'}}>

          <SettingsDivider icon="clock" title="Timing"/>

            <Row style={styles.row}>
              <Col size={50} style={styles.colLeft}>
                  <Text>Countdown</Text>
              </Col>
              <Col size={40} style={styles.colRight}>
                {this.state.timeRadio[0] && <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: 100 }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.timeLimit}
                  onValueChange={this.timeLimitChange}
                >
                  <Picker.Item label="1:00" value={1} />
                  <Picker.Item label="2:00" value={2}  />
                  <Picker.Item label="3:00" value={3}  />
                  <Picker.Item label="4:00" value={4}  />
                  <Picker.Item label="5:00" value={5}  />
                </Picker> }
              </Col>
              <Col size={10} style={styles.colRight}>     
                  <Radio selected={this.state.timeRadio[0]} onPress={() => this.timeRadioChange(0)} />
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.colLeft}>
                  <Text>Count Up</Text>
              </Col>
              <Col style={styles.colRight}>
                  <Radio selected={this.state.timeRadio[1]} onPress={() => this.timeRadioChange(1)} />

              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.colLeft}>
                  <Text>No Timing</Text>
              </Col>
              <Col style={styles.colRight}>
                  <Radio selected={this.state.timeRadio[2]} onPress={() => this.timeRadioChange(2)} />

              </Col>
            </Row>


          <SettingsDivider icon="book" title="Vocabulary"/>
            <Row style={styles.row}>
              <Col style={styles.colLeft}>
                  <Text>Difficulty</Text>
              </Col>
              <Col style={styles.colRight}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: 130}}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.vocabulary}
                    onValueChange={this.vocabularyChange}
                  >
                    <Picker.Item label="Easy" value="easy" />
                    <Picker.Item label="Medium" value="medium"  />
                    <Picker.Item label="Hard" value="hard"  />
                    <Picker.Item label="Insane" value="insane" />
                  </Picker>
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.colLeft}>
                  <Text>Use English Spelling</Text>
              </Col>
              <Col style={styles.colRight}>
                  <Switch value={this.state.englishSpelling} onValueChange={this.englishSpellingChange}/>
              </Col>
            </Row>


          <SettingsDivider icon="color-palette" title="Display"/>
            <Row style={styles.row}>
              <Col style={styles.colLeft}>
                  <Text>Show Anagrams</Text>
              </Col>
              <Col style={styles.colRight}>
                  <Switch value={this.state.showAnagrams} onValueChange={this.showAnagramsChange}/>
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col size={80} style={styles.colLeft}>
                  <Text>Order Anagrams Alphabetically</Text>
              </Col>
              <Col size={20} style={styles.colRight}>
                  <Switch value={this.state.alphabetizeAnagrams} onValueChange={this.alphabetizeChange}/>
              </Col>
            </Row>
          </Grid>
        

          </Container>
        </Modal>
    );
  }       
}

const styles=StyleSheet.create({
  
  row: {
    height: 50, 
    borderBottomWidth: 1, 
    borderColor: '#E8E8E8', 
    backgroundColor: 'white', 
    paddingLeft: 20,
    paddingRight: 20
  },
  colLeft: {
    alignItems: 'flex-start', 
    justifyContent: 'center', 
  }, 
  colRight: {
    alignItems: 'flex-end', 
    justifyContent: 'center', 
  }
});



