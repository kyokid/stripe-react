import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default class CreditCard extends Component {
    render() {
        const { card, onCharge } = this.props

        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Card.Meta>
                            ...{card.last4} - {card.country}
                        </Card.Meta>
                        <Card.Description>
                            <strong>Expires: {card.exp_month} / {card.exp_year}</strong>
                        </Card.Description>
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui button'>
                        <Button basic color='blue' onClick={(e) => {onCharge(card.id) }}>Charge</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
