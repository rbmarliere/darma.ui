import React, { Component } from "react";
import Project from "../containers/project";
import apps from "../apps";
import {
    Col,
    Container,
    Row
} from "reactstrap";

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
                                <Project {...data} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default ProjectList;

