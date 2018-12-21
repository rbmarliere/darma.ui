import React, { Component } from "react";
import PropTypes from "prop-types";
import
{
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

class Stake extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { modal: false, cpuQuantity: 0, netQuantity: 0 };
        this.toggle = this.toggle.bind(this);
        this.stake = this.stake.bind(this);
    }

    toggle()
    {
        this.setState({ modal: !this.state.modal, cpuQuantity: this.state.cpuQuantity, netQuantity: this.state.netQuantity });
    }

    cpuChange(e)
    {
        this.setState({ modal: this.state.modal, cpuQuantity: e.target.value, netQuantity: this.state.netQuantity });
    }

    netChange(e)
    {
        this.setState({ modal: this.state.modal, cpuQuantity: this.state.cpuQuantity, netQuantity: e.target.value });
    }

    stake()
    {
        this.props.stake( this.props.scatter, this.props.contract, this.state.cpuQuantity, this.state.netQuantity );
    }

    render()
    {
        return (
            <div>
                <Button className="btn-block" color="danger" onClick={ this.toggle }>Stake</Button>
                <Modal isOpen={ this.state.modal } toggle={ this.toggle }>
                    <ModalBody>
                        <Container>
                            <Row className="p-2">
                                <Label>CPU</Label>
                                <Input
                                    onChange={ this.cpuChange.bind(this) }
                                    type="text"
                                    placeholder="stake size for delegation"
                                    allowNegative={false}
                                    decimalScale={4}
                                    fixedDecimalScale={true}
                                    suffix=" EOS"
                                    tag={NumberFormat}
                                />
                            </Row>
                            <Row className="p-2">
                                <Label>NET</Label>
                                <Input
                                    onChange={ this.netChange.bind(this) }
                                    type="text"
                                    placeholder="stake size for delegation"
                                    allowNegative={false}
                                    decimalScale={4}
                                    fixedDecimalScale={true}
                                    suffix=" EOS"
                                    tag={NumberFormat}
                                />
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={ this.stake }>
                            Sell Bandwidth
                        </Button>
                        <Button color="secondary" onClick={ this.toggle }>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Stake.propTypes =
{
    contract: PropTypes.string.isRequired,
    scatter: PropTypes.object.isRequired,
    stake: PropTypes.func.isRequired
};

export default Stake;

