import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default class CreditCard extends Component {
    render() {
        const { card, onCharge } = this.props

        return (
            <Card.Content>
                <Card.Header>
                    <Card.Meta>
                
                    </Card.Meta>
                </Card.Header>
            </Card.Content>
        )
    }
}
