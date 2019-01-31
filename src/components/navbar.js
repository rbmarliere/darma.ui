import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../containers/login";

import {
    Collapse,
    Container,
    Nav,
    NavItem,
    Navbar,
    NavbarToggler,
    Row,
    NavLink
} from "reactstrap";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Navbar expand="md" dark>
                    <Link className="navbar-brand" to="/">
                        <Container>
                            <Row className="d-flex align-items-center">
                                <div className="logo">
                                    <img
                                        src={require("../assets/stakemine.png")}
                                        alt="StakeMine"
                                    />
                                </div>
                                &nbsp; Stake<b>Mine•</b>
                            </Row>
                        </Container>
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavLink tag="li">
                                <div className="nav-item nav-extra-item">
                                    <Link to="/about">About</Link>
                                </div>
                            </NavLink>

                            <NavLink tag="li">
                                <Link to="/list" className="btn btn-info">
                                    POST LISTING
                                </Link>
                            </NavLink>

                            <Login />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
