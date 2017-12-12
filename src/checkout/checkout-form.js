import React, { Component } from 'react'
import {injectStripe} from 'react-stripe-elements'
import CardSection from './card-section'


class CheckoutForm extends Component {

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.stripe.createToken({name: 'Harry'}).then(({token}) => {
            console.log('Received Stripe token:', token);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <AddressSection /> */}
                <CardSection />
                <button>Confirm order</button>
            </form>
        )
    }
}

export default injectStripe(CheckoutForm)
