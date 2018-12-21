import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Container,
    Row
} from "reactstrap";
import Stake from "./stake";

const Project =
    (props) => (
        <Card>
            <CardImg top width="100%" src={ require( "../assets/" + props.image ) }/>
            <CardBody>
                <CardTitle>
                    { props.title }
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <Container><Row>
                    <a href={ props.url }>
                        <Button color="info">
                                Info
                        </Button>
                    </a>
                    &nbsp;
                    <Stake {...props}/>
                </Row></Container>
            </CardBody>
        </Card>
    );

Project.propTypes =
{
    contract: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    scatter: PropTypes.object.isRequired,
    stake: PropTypes.func.isRequired
};

export default Project;

