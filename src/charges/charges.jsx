import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {
    Container,
    Header,
    Card,
    Modal,
    Button,
    Popup,
    Icon,
    Label,
    Menu
} from 'semantic-ui-react'
import key from '../secret_key.json';
import CurrencyFormatter from 'react-currency-formatter';
import {TableMenu} from '../menu/top-menu'

const BASE_URL = 'https://api.stripe.com/v1/'
const SECRET_KEY = key.secret_key;

export default class Charges extends Component {


    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        const { data, onRefund } = this.props
        const columns = [
            {
                id: 'chargeAmount',
                Header: 'Amount',
                accessor: a => {
                    let currency = a.currency;
                    let amount = a.amount
                    return (
                        <div style={{ color: '#3297d3', fontWeight: 700 }}>
                            <CurrencyFormatter
                                quantity={amount}
                                currency={currency}
                            />
                        </div>
                    )
                },
                maxWidth: 120
            },
            {
                accessor: 'currency',
                maxWidth: 40
            },
            {
                id: 'DesId',
                Header: 'Description',
                accessor: d => {
                    let des = d.description;
                    let id = d.id;
                    return (
                        <span>
                            <p>{des}</p>
                        </span>
                    )
                },
                minWidth: 120
            },
            {
                Header: 'Time',
                accessor: 'created',
                Cell: props => {
                    let t = new Date(1970, 0, 1);
                    t.setSeconds(props.value);
                    return t.toLocaleString();
                }
            }
        ]
        
        console.error(data)
        return (
            <Card fluid>
                <Card.Content>
                    <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize={7}
                    />
                </Card.Content>
            </Card>
        )
    }
}

const styles = {
    icon: {
        fontSize: '17px',
        margin: 0
    }
}