import React, { Component } from "react";

import { NavLink } from "reactstrap"
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";

class Login extends Component
{
    render()
    {
        return (
            <NavLink className="lightgray" href="https://github.com/rbmarliere/darma">
                login
            </NavLink>
        );
    }
}

export default Login;

