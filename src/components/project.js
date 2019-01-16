import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from "reactstrap";
import Stake from "./modals/stake";
import Error from "./modals/error";

const Project =
    (props) => (
        <div>
            <Card>
                <CardImg top width="100%" src={ require( "../assets/" + props.image ) }/>
                <CardBody>
                    <CardTitle>
                        { props.title }
                    </CardTitle>
                    <CardText>
                        { props.text }
                    </CardText>
                    <Container>
                        <Row className="p-2">
                            <Col>
                                <a href={ props.url }>
                                    <Button className="btn-block" color="info">
                                        Info
                                    </Button>
                                </a>
                            </Col>
                            <Col>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    onClick={ () => props.claim( props.scatter, props.contract ) }>
                                    Claim
                                </Button>
                            </Col>
                        </Row>
                        <Row className="p-2">
                            <Col>
                                <Stake {...props}/>
                            </Col>
                            <Col>
                                <Button
                                    className="btn-block"
                                    color="success"
                                    onClick={ () => props.unstake( props.scatter, props.contract ) }>
                                    Unstake
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
            <Error {...props}/>
        </div>
    );

Project.propTypes =
{
    contract: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    scatter: PropTypes.object,
    stake: PropTypes.func.isRequired,
    unstake: PropTypes.func.isRequired
};

export default Project;

