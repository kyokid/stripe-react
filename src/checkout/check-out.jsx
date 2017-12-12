import React, { Component } from 'react'
import { Header, Container, Card, Divider, Button } from 'semantic-ui-react'
import CardList from './card-list'
import { StripeProvider } from 'react-stripe-elements'
import MyStoreCheckout from './my-store-checkout'

export default class Checkout extends Component {
    render() {

        const { apiKey } = this.props
        console.warn(apiKey)
        return (
            
            <Container>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <StripeProvider apiKey={apiKey} >
                                <MyStoreCheckout />
                            </StripeProvider>
                        </Card.Header>
                        <Divider style={styles.divider} />
                    </Card.Content>
                </Card>
            </Container>
        )
    }
}

let styles = {
    divider: {
        marginTop: '25px'
    }
}
