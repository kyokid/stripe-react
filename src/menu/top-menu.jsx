import React, { Component } from 'react'
import { Container, Menu, Grid, Transition } from 'semantic-ui-react';

export class TopMenu extends Component {
    constructor(props) {
        super(props)

        let defaultTab;
        React.Children.map(this.props.children, (child) => {
            if (child.props.default) {
                defaultTab = child.props.title
            }
        })

        this.state = {
            currentTab: defaultTab
        }
    }

    onItemPress = (event, { name }) => {
        this.setState({
            currentTab: name
        })
    }

    render() {
        const _Menu = React.Children.map(this.props.children, (child) => {
            const menuName = child.props.title;
            const currentTab = this.state.currentTab === menuName;
            return (
                <Menu.Item name={menuName} active={currentTab} onClick={this.onItemPress}>
                    {menuName}
                </Menu.Item>
            )
        })

        let MenuContent;
        React.Children.map(this.props.children, (child) => {
            if (child.props.title === this.state.currentTab) {
                MenuContent = child
            }
        })

        return (
            <Container>
                <Grid>
                    <Grid.Column width={3}>
                        <Menu vertical>
                            {_Menu}
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={13}>
                        <Transition animation='fade' duration={5000}>
                            {MenuContent}
                        </Transition>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export class TabMenu extends Component {
    render() {
        return this.props.children;
    }
}

export class TableMenu extends Component {
    render() {
        const {onRefund, charge} = this.props;
        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Actions</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name='refund' onClick={() => onRefund(charge)}/>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Connections</Menu.Header>
                    <Menu.Menu>
                        {/* <Menu.Item name='detail' onClick={() => onViewDetails(charge)}>
                            Payment Details
                        </Menu.Item> */}
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}