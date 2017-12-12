import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'
import CheckoutForm from './checkout-form'

export default class MyStoreCheckout extends Component {
    render() {
        return (
            <Elements>
                <CheckoutForm />
            </Elements>
        )
    }
}
