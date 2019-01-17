import React, { Component } from "react";
import Project from "../containers/project";
import {
    Button,
    Col,
    Container,
    Row
} from "reactstrap";
import { rpc } from "../helpers/scatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            listings: [],
            showLoader: false,
            lowerBound: null
        };
    }

    getListings()
    {
        const isFirstPage = this.state.lowerBound === null;
        const listings = this.state.listings.slice();
        rpc.get_table_rows(
            {
                code: "stakemine112",
                scope: "stakemine112",
                table: "listing",
                lower_bound: this.state.lowerBound,
                limit: isFirstPage ? 6 : 7
            }
        ).then(
            (res) => {
                const newListings = isFirstPage ? res.rows : res.rows.slice(1, res.rows.length);
                this.setState( {
                    listings: listings.concat(newListings),
                    showLoader: res.more,
                    lowerBound: res.rows[ res.rows.length - 1 ].contract
                });
            }
        );
    }

    componentDidMount()
    {
        this.getListings();
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
                <Row>
                    &nbsp;
                </Row>
                {
                    this.state.showLoader &&
                        <Row>
                            <Col xs="2"></Col>
                            <Col xs="8" className="text-center">
                                <Button
                                    className="loadMore"
                                    onClick={ () => { this.getListings(); }}
                                >
                                    <FontAwesomeIcon icon={ ["fas", "redo"] } size="lg"/>
                                    &nbsp;
                                    Load More
                                </Button>
                            </Col>
                            <Col xs="2"></Col>
                        </Row>
                }

            </Container>
        );
    }
}

export default ProjectList;

