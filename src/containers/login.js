import React, { Component } from "react";
import { connect } from "react-redux";
import LoginComp from "../components/login.js";
import { scatterLogin, scatterLogout } from "../helpers/scatter";
import { hideError } from "../helpers/actions";

class Login extends Component {
    componentDidMount() {
        this.props.login();
    }

    render() {
        return <LoginComp {...this.props} />;
    }
}

const mapStateToProps = state => {
    return {
        scatter: state.scatter,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            scatterLogin(dispatch);
        },
        logout: () => {
            scatterLogout(dispatch);
        },
        hideError: () => {
            dispatch(hideError());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
