import React, { Component } from "react";

import
{
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";

import Login from "./login";

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }

    toggle()
    {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render()
    {
        return (
            <div>
                <Navbar expand="md" dark>
                    <NavbarBrand className="lightgray" href="/">darma</NavbarBrand>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Login contract="eosio"></Login>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

