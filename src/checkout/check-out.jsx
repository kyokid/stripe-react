import React, { Component } from 'react'
import { Header, Container, Card, Divider, Button } from 'semantic-ui-react'
import CardList from './card-list'

export default class Checkout extends Component {
    render() {

        const { cards, onSelectedCard, onCharge } = this.props
        return (
            <Container>
                <Header as='h1' className="stripe-header">Checkout</Header>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            Choose your card
                            <Button floated='right' basic color='green' onClick={onSelectedCard}>Custom Card</Button>
                        </Card.Header>
                        <Divider style={styles.divider}/>
                        <CardList cards={cards} onCharge={onCharge}/>
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
