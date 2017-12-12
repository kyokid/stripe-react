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
import Charges from '../charges/charges'


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
      loading: true,
      status: '',
      changeType: 'normal',
      isOpenChargeModal: false,
      charges: [],
      charge: {}
    }
  }

  async fetchCharges() {
    const url = `${BASE_URL}charges`
    this.setState({
      loading: true
    })
    await fetch(url, {
      headers: {
        'Authorization': `Bearer ${SECRET_KEY}`,
      }
    }).then(data => data.json())
      .then(result => {
        this.setState({
          charges: result,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.fetchCharges()
  }

  onRefund = charge => {
    this.setState({
      charge
    })
  }

  render() {
    let content;
    content = (
      <TopMenu>
        <Menu default title="Checkout">
          <Checkout
            apiKey={PUBLISH_KEY}

          />
        </Menu>
        <Menu title="Charges">
          <Charges data={this.state.charges.data} onRefund={this.onRefund}/>
        </Menu>
      </TopMenu>
    )
    return (
      <Container style={{ marginTop: '5em' }}>
        <Header as='h1'>Streeple</Header>
        {content}
      </Container>
    );
  }
}

export default App;
