import React, { Component } from 'react'
import { injectStripe } from 'react-stripe-elements'
import CardSection from './card-section'
import { Container, Input, Label, TextArea, Form, Button } from 'semantic-ui-react'
import { CardElement } from 'react-stripe-elements'
import key from '../secret_key.json'

const BASE_URL = 'https://api.stripe.com/v1/'
const SECRET_KEY = key.secret_key;
class CheckoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0,
            currency: 'usd',
            description: '',
            isCharging: false,
            alertMessage: ''
        }
    }

    handleSubmit = (ev, data) => {
        ev.preventDefault()
        this.props.stripe.createToken().then(({ token }) => {
            console.log('Received Stripe token:', token);
            this.createCharge(token)
        });

    }

    createCharge = async token => {
        this.setState({
            isCharging: true
        })
        console.error('debugging: ', this.state.amount, this.state.currency, token.id, this.state.description)
        await fetch(`${BASE_URL}charges`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${SECRET_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `amount=${this.state.amount}&currency=${this.state.currency}&source=${token.id}&description=${this.state.description}`
        }).then(data => data.json())
            .then(result => {
                console.error('result is ', result.status)
                if (result.status === 'succeeded') {
                    this.setState({
                        isCharging: false,
                        alertMessage: 'Charge successful!'
                    })
                } else if (result.error) {
                    this.setState({
                        isCharging: false,
                        alertMessage: 'Something error'
                    })
                }
            })
    }

    render() {
        return (
            <Form name='charge' onSubmit={this.handleSubmit}>
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
                        <input onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                        <Label>.00</Label>
                    </Input>
                </Form.Field>
                <Form.Field>
                    <Label basic content='Description' />
                    <Input placeholder='Description'
                        name="description"
                        onChange={(e) => { this.setState({ description: e.target.value }) }} />
                </Form.Field>
                {this.state.isCharging ? <Button basic loading /> : <button className='button-pay'>Pay</button>}
                {this.state.alertMessage ? <Label content={this.state.alertMessage} /> : ''}
            </Form>
        )
    }
}

export default injectStripe(CheckoutForm)
