import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div>
                <Button
                    className="btn-block"
                    title="More Information"
                    color="info"
                    onClick={this.toggle}
                >
                    <FontAwesomeIcon
                        icon={["fas", "exclamation-triangle"]}
                        size="lg"
                    />
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Bandwidth Allocation
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col md="6">
                                    <Row className="info-rows">
                                        <b>CPU Target:</b>&nbsp;{" "}
                                        {this.props.cpu_target}
                                    </Row>
                                    <Row className="info-rows">
                                        <b>CPU Reward: </b>&nbsp;{" "}
                                        {this.props.cpu_reward}
                                    </Row>
                                    <Row className="info-rows">
                                        <b>CPU Total: </b>&nbsp;{" "}
                                        {this.props.cpu_total}
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <Row className="info-rows">
                                        <b>NET Target: </b>&nbsp;{" "}
                                        {this.props.net_target}
                                    </Row>
                                    <Row className="info-rows">
                                        <b>NET Reward: </b>&nbsp;{" "}
                                        {this.props.net_reward}
                                    </Row>
                                    <Row className="info-rows">
                                        <b>NET Total: </b>&nbsp;{" "}
                                        {this.props.net_total}
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter className="infoFooter">
                        Period: {this.props.period} seconds (Amount Of Time To
                        Stake For Each Payout)
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Info.propTypes = {
    period: PropTypes.number.isRequired,
    cpu_target: PropTypes.string.isRequired,
    cpu_reward: PropTypes.string.isRequired,
    cpu_total: PropTypes.string.isRequired,
    net_target: PropTypes.string.isRequired,
    net_reward: PropTypes.string.isRequired,
    net_total: PropTypes.string.isRequired
};

export default Info;
