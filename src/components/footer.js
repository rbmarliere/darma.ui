import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Container,
    Row
} from "reactstrap";

const Footer = () =>
{
    return (
        <footer className="container-fluid" expand="md">
            <Container>
                <Row className="pt-3 pb-3">
                    <Col xs="3">
                        <b>&gt;&gt;</b>
                        &nbsp;
                        StakeMine
                    </Col>
                    <Col xs="3">
                        &nbsp;
                        ::
                        &nbsp;
                        <a href="https://t.me/stakemine" target="_blank" rel="noopener noreferrer">
                            contact
                        </a>
                    </Col>
                    <Col xs="3">
                        &nbsp;
                        ::
                        &nbsp;
                        <Link to="/about">
                            about
                        </Link>
                    </Col>
                    <Col xs="3">
                        &nbsp;
                        ::
                        &nbsp;
                        <Link to="/list">
                            list
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

