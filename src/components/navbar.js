import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../containers/login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    Collapse,
    Nav,
    NavItem,
    Navbar,
    NavbarToggler,
} from "reactstrap";

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
                    <Link className="navbar-brand" to="/">
                        <FontAwesomeIcon icon={ ["fas", "dharmachakra"] } size="lg"/>
                        &nbsp;
                        fasma
                    </Link>
                    <NavbarToggler onClick={ this.toggle } />
                    <Collapse isOpen={ this.state.isOpen } navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Login/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;

