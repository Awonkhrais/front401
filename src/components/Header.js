import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
    render() {
        return (
            <Nav activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
            
                <Nav.Item>
                    <Nav.Link href="/favi">Favorite</Nav.Link>
                </Nav.Item>
            
            </Nav>
        )
    }
}

export default Header
