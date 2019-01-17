import React, { Component } from "react";
import PropTypes from "prop-types";
import
{
    Modal,
    ModalBody,
    ModalHeader
} from "reactstrap";

class Error extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render()
    {
        return (
            <Modal isOpen={ (this.props.error !== null) } toggle={ this.props.hideError }>
                <ModalHeader className="error" toggle={ this.props.hideError }>
                        ERROR
                </ModalHeader>
                <ModalBody>
                    { this.props.error }
                </ModalBody>
            </Modal>
        );
    }
}

Error.propTypes =
{
    hideError: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default Error;

