import React from "react";
import PropTypes from "prop-types";
import
{
    Modal,
    ModalBody,
    ModalHeader
} from "reactstrap";

const Error =
    (props) => (
        <div>
            <Modal isOpen={ (props.error !== null) } toggle={ props.hideError }>
                <ModalHeader className="error" toggle={ props.hideError }>
                    ERROR
                </ModalHeader>
                <ModalBody>
                    { props.error }
                </ModalBody>
            </Modal>
        </div>
    );

Error.propTypes =
{
    hideError: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default Error;

