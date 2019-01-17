import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";
import Error from "./modals/error";

const LoginComp =
    (props) => {
        if ( props.scatter !== null ) {
            return (
                <div>
                    <NavLink
                        className="lightgray"
                        onClick={ props.logout }
                        href="#">
                        { props.scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name } - logout
                    </NavLink>
                    <Error {...props}/>
                </div>
            );
        } else {
            return (
                <div>
                    <NavLink
                        className="lightgray"
                        onClick={ props.login }
                        href="#">
                        login
                    </NavLink>
                    <Error {...props}/>
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

