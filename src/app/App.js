import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Menu,
  Header,
} from 'semantic-ui-react';

import key from '../secret_key.json';
import { TopMenu, TabMenu } from '../menu/top-menu'
import Checkout from '../checkout/check-out'


const PUBLISH_KEY = key.publish_key
const SECRET_KEY = key.secret_key;
const BASE_URL = 'https://api.stripe.com/v1/'

const FixedMenu = () => {
  <TopMenu>
    <Menu default title="Checkout">

    </Menu>
    <Menu title="Charges">

    </Menu>

  </TopMenu>
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      loading: true,
      status: '',
      changeType: 'normal',
      isOpenChargeModal: false,
      cardId: ''
    }
  }

  onSelectedCard = () => {
    this.setState({
      changeType: 'custom',
      isOpenChargeModal: true
    })
  }

  fetchCard() {
    const url = `${BASE_URL}/customers/`
  }

  onCharge = (cardId) => {
    this.setState({
      chargeType: 'normal',
      isOpenChargeModal: true,
      cardId
    })
  }

  render() {
    let content;
    content = (
      <TopMenu>
        <Menu default title="Checkout">
          <Checkout 
          cards={this.state.cards} 
          onSelectedCard={this.onSelectedCard}
          onCharge={this.onCharge}
          />
        </Menu>
        <Menu title="Charges">
        </Menu>
      </TopMenu>
    )
    return (
      <Container style={{ marginTop: '5em'}}>
      <Header as='h1'>Streeple</Header>
        {content}
      </Container>
    );
  }
}

export default App;