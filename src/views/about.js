import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components//Footer/Footer";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    Row,
    Container,
    Col
} from "reactstrap";

const About = () => {
    return (
        <div className="root">
            <NavBar />
            <Container className="main">
                <div className="content text-center">
                    <h1>Summary</h1>
                    <Row>
                        <Col md={{ size: 8, offset: 2 }}>
                            <p>
                                The Exponential Operating System (EOS) is the
                                first cryptocurrency to offer bandwidth
                                allowance as a function of stake ownership made
                                illiquid. Though this is a tremendously valuable
                                milestone in cryptocurrency, present tools
                                require additional help to create demand for
                                bandwidth for the ecosystem to be
                                self-sustaining. Stakemine is a tool made for
                                the specific purpose of creating a middle ground
                                wherein everyday investors and creators can
                                leverage their primary resources for lower risk
                                token offerings via bandwidth-offering contracts
                                for tokenized DApp tokens.
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <h1 className="text-center">Team</h1>
                    <Row>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a
                                            href="https://whaleshares.io/officialfuzzy"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar"
                                                src={require("../assets/img/fuzzy.jpg")}
                                            />
                                            <h5 className="title">
                                                Official Fuzzy
                                            </h5>
                                        </a>
                                        <p className="description">Founder</p>
                                    </div>
                                    <div className="card-description text-center">
                                        Having coined the phrase Exponential
                                        Operating System and co founded
                                        Bitshares, Fuzzy is a rock amongst the
                                        DPoS community and has a range of
                                        experience with the EOS ecosystem.
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://whaleshares.io/officialfuzzy"
                                            className="btn"
                                        >
                                            Follow On Whaleshares.io
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a
                                            href="https://github.com/rbmarliere/"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar"
                                                src={require("../assets/img/ricardo.png")}
                                            />
                                            <h5 className="title">
                                                Ricardo Marliere
                                            </h5>
                                        </a>
                                        <p className="description">
                                            Co-Founder / Smart Contract Dev
                                        </p>
                                    </div>
                                    <div className="card-description text-center">
                                        Ricardo has over 6 years development
                                        experience and has been working on EOS
                                        since the Dawn. Currently Ricardo leads
                                        EOS Brazil Block Producer and creates
                                        tools for the EOS ecosystem.
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://github.com/rbmarliere/"
                                            className="btn"
                                        >
                                            Follow On Github
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a
                                            href="https://smoke.io/@stoner"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar"
                                                src={require("../assets/img/jonathan.jpg")}
                                            />
                                            <h5 className="title">
                                                Jonathan Hunter
                                            </h5>
                                        </a>
                                        <p className="description">
                                            Co-Founder / Front End Dev
                                        </p>
                                    </div>
                                    <div className="card-description text-center">
                                        Jonathan has over half a decade
                                        experience in cryptocurrency and has a
                                        thorough understanding of building User
                                        Interfaces that serves the needs of
                                        users, investors, and token holders.
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <a
                                            href="https://smoke.io/@stoner"
                                            className="btn"
                                        >
                                            Follow On Smoke.io
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default About;
