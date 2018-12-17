import React, { Component } from "react";
import PropTypes from "prop-types";
import apps from "../apps";
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

const CardComp =
    (props) => (
        <Card>
            <CardImg top width="100%" src={ require( "../assets/" + props.image ) }/>
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <Button>
                Sell Bandwidth
                </Button>
            </CardBody>
        </Card>
    );

CardComp.propTypes =
{
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

class ProjectList extends Component
{
    render()
    {
        return (
            <Container className="projects">
                <Row>
                    {
                        apps.map( (data, i) => (
                            <Col key={i} className="project" lg="4" sm="6" xs="12">
                                <CardComp {...data} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default ProjectList;

