import React, { Component } from "react";
import Project from "../containers/project";
import {
    Col,
    Container,
    Row
} from "reactstrap";
import { rpc } from "../helpers/scatter";

class ProjectList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { listings: [] };
    }

    componentDidMount()
    {
        rpc.get_table_rows(
            {
                code: "stakemine112",
                scope: "stakemine112",
                table: "listing"
            }
        ).then(
            res => this.setState({ listings: res.rows })
        );
    }

    render()
    {
        return (
            <Container className="main">
                <Row>
                    {
                        this.state.listings.map( (data, i) => (
                            <Col
                                key={i}
                                className="project"
                                xs={{ size: 8, offset: 2 }}
                                md={{ size: 6, offset: 0 }}
                                lg={{ size: 4, offset: 0 }}
                            >
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

