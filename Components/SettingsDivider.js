import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


type Props = {
  icon: string,
  title: string
};
export default class SettingsDivider extends Component<Props> {

  render() {
    return (
        <Row style={styles.divider}> 
            <Col style={{width: 24}}>
              <Icon style={{fontSize: 18}} active android={`md-${this.props.icon}`} ios={`ios-${this.props.icon}`} />
            </Col>
            <Col style={styles.col}>
            <Text style={{fontSize: 14}}>
                {this.props.title}
              </Text>
            </Col>
       </Row>
    );
  }       
}

const styles= StyleSheet.create({
  divider: {
    height: 50, 
    alignItems: 'flex-end', 
    justifyContent: 'flex-start', 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 10
  },
  col: {
    alignItems: 'flex-start', 
    justifyContent: 'center',
  },
});


