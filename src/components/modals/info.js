import React, { Component } from "react";
import PropTypes from "prop-types";
import
{
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

class Info extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle()
    {
        this.setState({ modal: !this.state.modal });
    }

    render()
    {
        return (
            <div>
                <Button
                    className="btn-block"
                    title="More Information"
                    color="info"
                    onClick={ this.toggle }>
                    <FontAwesomeIcon icon={ ["fas", "exclamation-triangle"] } size="lg"/>
                </Button>
                <Modal isOpen={ this.state.modal } toggle={ this.toggle }>
                    <ModalHeader toggle={ this.toggle }>
                        Bandwidth Allocation
                    </ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col md="6">
                                    <Row>
                                        CPU Target: { this.props.cpu_target }
                                    </Row>
                                    <Row>
                                        CPU Reward: { this.props.cpu_reward }
                                    </Row>
                                    <Row>
                                        CPU Total: { this.props.cpu_total }
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <Row>
                                        NET Target: { this.props.net_target }
                                    </Row>
                                    <Row>
                                        NET Reward: { this.props.net_reward }
                                    </Row>
                                    <Row>
                                        NET Total: { this.props.net_total }
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter className="infoFooter">
                        Period: { this.props.period } seconds
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

Info.propTypes =
{
    period: PropTypes.number.isRequired,
    cpu_target: PropTypes.string.isRequired,
    cpu_reward: PropTypes.string.isRequired,
    cpu_total: PropTypes.string.isRequired,
    net_target: PropTypes.string.isRequired,
    net_reward: PropTypes.string.isRequired,
    net_total: PropTypes.string.isRequired,
};

export default Info;
