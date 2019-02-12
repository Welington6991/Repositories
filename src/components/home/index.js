import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Container } from "native-base";
import Header from '../header/index';
import Cards from '../cards/index';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} >
        <Container style={{ width: '100%', height: '100%' }}>
          <Header actual={this} />
            <Cards actualCards={this} />
        </Container>
      </SafeAreaView>
    );
  }
}

export default Home;