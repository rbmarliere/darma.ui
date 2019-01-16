import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from "reactstrap";
import Stake from "./modals/stake";
import Error from "./modals/error";
import Info from "./modals/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project =
    (props) => (
        <div>
            <Card className="projectCard">
                <CardHeader className="projectHeader"></CardHeader>
                <div className="projectImageDiv">
                    <a href={ props.url } target="_blank" rel="noopener noreferrer">
                        <CardImg top src={ props.image_url } className="projectImage"/>
                    </a>
                </div>
                <CardBody>
                    <CardTitle className="projectTitle">
                        <a href={ "https://bloks.io/?p=account/" + props.contract } target="_blank" rel="noopener noreferrer">
                            <b>{ props.contract }</b>
                        </a>
                    </CardTitle>
                    <CardText className="projectText">
                        { props.description }
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Container>
                        <Row>
                            <Col lg="3" md="3" xs="3" className="projectButton">
                                <Info {...props}/>
                            </Col>
                            <Col lg="3" md="3" xs="3" className="projectButton">
                                <Stake {...props}/>
                            </Col>
                            <Col lg="3" md="3" xs="3" className="projectButton">
                                <Button
                                    className="btn-block"
                                    title="Unstake Bandwidth from Project"
                                    color="danger"
                                    onClick={ () => props.unstake( props.scatter, props.contract ) }>
                                    <FontAwesomeIcon icon={ ["fas", "heart-broken"] } size="lg"/>
                                </Button>
                            </Col>
                            <Col lg="3" md="3" xs="3" className="projectButton">
                                <Button
                                    className="btn-block"
                                    title="Claim Rewards"
                                    color="primary"
                                    onClick={ () => props.claim( props.scatter, props.contract ) }>
                                    <FontAwesomeIcon icon={ ["fas", "money-bill-wave"] } size="lg"/>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </CardFooter>
            </Card>
            <Error {...props}/>
        </div>
    );

Project.propTypes =
{
    contract: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
    cpu_target: PropTypes.string.isRequired,
    cpu_reward: PropTypes.string.isRequired,
    cpu_total: PropTypes.string.isRequired,
    net_target: PropTypes.string.isRequired,
    net_reward: PropTypes.string.isRequired,
    net_total: PropTypes.string.isRequired,

    scatter: PropTypes.object,
    stake: PropTypes.func.isRequired,
    unstake: PropTypes.func.isRequired
};

export default Project;

