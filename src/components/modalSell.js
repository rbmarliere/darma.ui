import React, { Component } from "react";
import PropTypes from "prop-types";
import
{
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import NumberFormat from "react-number-format";

class ModalSell extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { modal: false, quantity: 0 };
        this.toggle = this.toggle.bind(this);
        this.sell = this.sell.bind(this);
        this.formatChars = { "*": "[0-9]+", "9": "[0-9]" };
    }

    toggle()
    {
        this.setState({ modal: !this.state.modal, quantity: this.state.quantity });
    }

    qtyChange(e)
    {
        this.setState({ modal: this.state.modal, quantity: e.target.value });
    }

    sell()
    {
        this.props.sell( this.props.scatter, this.props.contract, this.state.quantity );
    }

    render()
    {
        return (
            <div>
                <Button color="danger" onClick={ this.toggle }>Sell Bandwidth</Button>
                <Modal isOpen={ this.state.modal } toggle={ this.toggle }>
                    <ModalHeader toggle={ this.toggle }></ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Quantity</Label>
                            <Input
                                onChange={ this.qtyChange.bind(this) }
                                type="text"
                                placeholder="stake size for delegation"
                                allowNegative={false}
                                decimalScale={4}
                                suffix=" EOS"
                                tag={NumberFormat}
                            />
                        </FormGroup>
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

