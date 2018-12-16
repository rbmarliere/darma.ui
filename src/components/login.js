import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

const LoginComp =
    ({ scatter, login, logout }) => {
        if ( scatter !== null ) {
            return (
                <NavLink
                    className="lightgray"
                    onClick={ logout }
                    href="#">
                    { scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name } - logout
                </NavLink>
            );
        } else {
            return (
                <NavLink
                    className="lightgray"
                    onClick={ login }
                    href="#">
                    login
                </NavLink>
            );
        }
    };

LoginComp.propTypes = {
    scatter: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default LoginComp;

