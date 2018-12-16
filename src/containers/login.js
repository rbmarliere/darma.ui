import React, { Component } from "react";
import { connect } from "react-redux";
import LoginComp from "../components/login.js";
import { scatterLogin, scatterLogout } from "../helpers/scatter";

class Login extends Component
{
    componentDidMount()
    {
    }

    render()
    {
        return <LoginComp {...this.props} />;
    }
}

const mapStateToProps = state => { return { scatter: state.scatter }; };

const mapDispatchToProps =
    dispatch => {
        return {
            login: () => { scatterLogin(dispatch); },
            logout: () => { scatterLogout(dispatch); }
        };
    };

export default connect( mapStateToProps, mapDispatchToProps )(Login);

