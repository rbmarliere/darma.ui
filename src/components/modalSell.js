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

class ModalSell extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { modal: false, cpuQuantity: 0, netQuantity: 0 };
        this.toggle = this.toggle.bind(this);
        this.sell = this.sell.bind(this);
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

    sell()
    {
        this.props.sell( this.props.scatter, this.props.contract, this.state.cpuQuantity, this.state.netQuantity );
    }

    render()
    {
        return (
            <div>
                <Button color="danger" onClick={ this.toggle }>Sell Bandwidth</Button>
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
                                    suffix=" EOS"
                                    tag={NumberFormat}
                                />
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={ this.sell }>
                            Sell Bandwidth
                        </Button>
                        <Button color="secondary" onClick={ this.toggle }>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

ModalSell.propTypes =
{
    contract: PropTypes.string.isRequired,
    scatter: PropTypes.object.isRequired,
    sell: PropTypes.func.isRequired
};

export default ModalSell;

