import React from "react";
import PropTypes from "prop-types";
import { Nav, NavLink } from "reactstrap";
import Error from "./modals/error";

const LoginComp = props => {
    if (props.scatter !== null) {
        return (
            <div className="login-items">
                <Nav className="ml-auto" navbar>
                    <NavLink tag="li" className="lightgray">
                        Your CPU: 153035
                    </NavLink>
                    <NavLink tag="li" className="lightgray">
                        Your NET: 34040
                    </NavLink>
                    <NavLink
                        tag="li"
                        className="lightgray"
                        onClick={props.logout}
                        href="#"
                    >
                        {
                            props.scatter.identity.accounts.find(
                                x => x.blockchain === "eos"
                            ).name
                        }{" "}
                        - logout
                    </NavLink>
                </Nav>
                <Error {...props} />
            </div>
        );
    } else {
        return (
            <div>
                <NavLink className="lightgray" onClick={props.login} href="#">
                    login
                </NavLink>
                <Error {...props} />
            </div>
        );
    }
};

LoginComp.propTypes = {
    scatter: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default LoginComp;
