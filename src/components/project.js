import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from "reactstrap";

const Project =
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
                <Button onClick={props.onClick}>
                    Sell Bandwidth
                </Button>
            </CardBody>
        </Card>
    );

Project.propTypes =
{
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    sell: PropTypes.func.isRequired
};

export default Project;

