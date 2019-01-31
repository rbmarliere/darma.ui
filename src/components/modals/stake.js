import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Container,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    Row
} from "reactstrap";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Stake extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, cpuQuantity: 0, netQuantity: 0 };
        this.toggle = this.toggle.bind(this);
        this.stake = this.stake.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            cpuQuantity: 0,
            netQuantity: 0
        });
    }

    cpuChange(e) {
        this.setState({
            modal: this.state.modal,
            cpuQuantity: e.target.value,
            netQuantity: this.state.netQuantity
        });
    }

    netChange(e) {
        this.setState({
            modal: this.state.modal,
            cpuQuantity: this.state.cpuQuantity,
            netQuantity: e.target.value
        });
    }

    stake() {
        this.toggle();

        var cpu = this.state.cpuQuantity;
        var net = this.state.netQuantity;

        if (cpu === 0 && net !== 0) cpu = "0.0000 EOS";
        if (cpu !== 0 && net === 0) net = "0.0000 EOS";

        this.props.stake(this.props.scatter, this.props.contract, cpu, net);
    }

    render() {
        return (
            <div>
                <Button
                    className="btn-block"
                    title="Stake Bandwidth to Project"
                    color="success"
                    onClick={this.toggle}
                >
                    <FontAwesomeIcon icon={["fas", "handshake"]} size="lg" />
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <Container>
                            <h4 className="h4-stake">
                                Stake your available bandwidth to DarmaToken.
                                (Your EOS never leaves your wallet)
                            </h4>
                            <Row className="p-2">
                                <Label>CPU</Label>
                                <Input
                                    onChange={this.cpuChange.bind(this)}
                                    type="text"
                                    placeholder="stake size for delegation"
                                    allowNegative={false}
                                    decimalScale={4}
                                    fixedDecimalScale={true}
                                    suffix=" EOS"
                                    tag={NumberFormat}
                                    defaultValue="0"
                                />
                            </Row>
                            <Row className="p-2">
                                <Label>NET</Label>
                                <Input
                                    onChange={this.netChange.bind(this)}
                                    type="text"
                                    placeholder="stake size for delegation"
                                    allowNegative={false}
                                    decimalScale={4}
                                    fixedDecimalScale={true}
                                    suffix=" EOS"
                                    tag={NumberFormat}
                                    defaultValue="0"
                                />
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.stake}>
                            Stake Bandwidth
                        </Button>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Stake.propTypes = {
    contract: PropTypes.string.isRequired,
    scatter: PropTypes.object,
    stake: PropTypes.func.isRequired
};

export default Stake;
