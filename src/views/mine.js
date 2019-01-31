import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer/Footer";

import Panels from "../components/Panels";
import { Container, Row, Col } from "reactstrap";

const Mine = () => {
    return (
        <div className="root">
            <NavBar />
            <br />
            <br />
            <Container className="main">
                <Panels />
                <Row>
                    <Col xs="4" />
                    <Col xs="4" className="text-center">
                        <br />
                        <h4 />
                    </Col>
                    <Col xs="4" />
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Mine;
