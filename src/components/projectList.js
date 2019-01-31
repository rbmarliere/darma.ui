import React, { Component } from "react";
import Project from "../containers/project";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { rpc } from "../helpers/scatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            showLoader: false,
            lowerBound: null,
            hasMore: true,
            filtering: false,
            filtered: []
        };
    }

    getListings(recursive = false) {
        const isFirstPage = this.state.lowerBound === null;
        const listings = this.state.listings.slice();
        rpc.get_table_rows({
            code: "stakemine112",
            scope: "stakemine112",
            table: "listing",
            lower_bound: this.state.lowerBound,
            limit: isFirstPage ? 6 : 7
        }).then(res => {
            const newListings = isFirstPage
                ? res.rows
                : res.rows.slice(1, res.rows.length);
            this.setState({
                listings: listings.concat(newListings),
                showLoader: res.more,
                lowerBound: res.rows[res.rows.length - 1].contract,
                filtered: this.state.filtering
                    ? this.state.filtered
                    : listings.concat(newListings)
            });
            if (newListings.length > 0) {
                if (recursive) {
                    this.getListings();
                }
            } else {
                this.setState({ hasMore: false });
            }
        });
    }

    componentDidMount() {
        this.getListings();
    }

    searchChange(e) {
        if (this.state.hasMore) this.getListings(true);

        if (e.target.value === "") {
            this.setState({ filtering: false, filtered: this.state.listings });
        } else {
            const listings = this.state.listings.slice();
            const filter = e.target.value.toLowerCase();
            let filtered = listings.filter(i => {
                return (
                    i.contract.includes(filter) ||
                    i.description.toLowerCase().includes(filter)
                );
            });
            this.setState({ filtering: true, filtered: filtered });
        }
    }

    render() {
        return (
            <Container className="main">
                <Row>
                    <Col xs="2" />
                    <Col xs="8" className="text-center">
                        <Input
                            placeholder="Search Projects"
                            onChange={this.searchChange.bind(this)}
                        />
                    </Col>
                    <Col xs="2" />
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    {this.state.filtered.map((data, i) => (
                        <Col
                            key={i}
                            className="project"
                            xs={{ size: 10, offset: 1 }}
                            md={{ size: 6, offset: 0 }}
                            lg={{ size: 4, offset: 0 }}
                        >
                            <Project {...data} />
                        </Col>
                    ))}
                </Row>
                <Row>&nbsp;</Row>
                {this.state.showLoader && (
                    <Row>
                        <Col xs="2" />
                        <Col xs="8" className="text-center">
                            <Button
                                className="loadMore"
                                onClick={() => {
                                    this.getListings();
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "redo"]}
                                    size="lg"
                                />
                                &nbsp; Load More
                            </Button>
                        </Col>
                        <Col xs="2" />
                    </Row>
                )}
            </Container>
        );
    }
}

export default ProjectList;
