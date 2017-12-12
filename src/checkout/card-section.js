import React, { Component } from 'react'
import { CardElement } from 'react-stripe-elements'
import { Container, Input, Label, TextArea, Form } from 'semantic-ui-react'

export default class CardSection extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <Form.Field>
                    <Label basic content='Card details' />
                    <CardElement style={{ base: { fontSize: '18px' } }} />
                </Form.Field>
                <Form.Field>
                    <Label basic content='Amount' />
                    <Input
                        labelPosition='right'
                        type='text'
                        placeholder='Enter amount' >
                        <Label basic>$</Label>
                        <input />
                        <Label>.00</Label>
                    </Input>
                </Form.Field>
                <Form.Field>
                    <Label basic content='Description' />
                    <Input placeholder='Description' name="description" />
                </Form.Field>
            </Container>
        )
    }
}
