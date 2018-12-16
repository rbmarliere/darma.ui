import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login, logout } from "../actions";
import { NavLink } from "reactstrap";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";

const network = {
    blockchain: "eos",
    chainId: "f29e900c77f2798c445245b21ed431a2814b28635f0bee57230080fa54982805",
    host: "10.197.70.202",
    port: 8888,
    protocol: "http"
};

const Login =
    ({ scatter, login, logout }) => {
        if ( scatter !== null ) {
            return (
                <NavLink
                    className="lightgray"
                    onClick={ () => {
                        ScatterJS.scatter.connect("eosio").then( () => { ScatterJS.scatter.forgetIdentity(); });
                        logout();
                    } }
                    href="#">
                    { scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name } - logout
                </NavLink>
            );
        } else {
            return (
                <NavLink
                    className="lightgray"
                    onClick={login}
                    href="#">
                    login
                </NavLink>
            );
        }
    };

Login.propTypes = {
    scatter: PropTypes.object,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => { return { scatter: state.scatter }; };

const mapDispatchToProps =
    dispatch => {
        return {
            login: () => {
                ScatterJS.plugins( new ScatterEOS() );
                try {
                    ScatterJS.scatter.connect("eosio").then( (connected) => {
                        if ( ! connected )
                            return false;

                        const
                            scatter = ScatterJS.scatter,
                            requiredFields = { accounts: [network] };

                        scatter.getIdentity(requiredFields).then(() => {
                            dispatch( login(scatter) );
                        });

                        window.ScatterJS = null;
                    });
                } catch (error) {
                    // ignore
                }
            },
            logout: () => {
                dispatch( logout() );
            }
        };
    };

export default connect( mapStateToProps, mapDispatchToProps )(Login);

