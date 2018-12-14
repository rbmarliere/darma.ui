import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Api, JsonRpc, JsSignatureProvider } from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";

const
    endpoint = "http://10.197.70.202:8888",
    network = {
        blockchain: "eos",
        chainId: "f29e900c77f2798c445245b21ed431a2814b28635f0bee57230080fa54982805",
        host: "10.197.70.202",
        port: 8888,
        protocol: "http"
    };

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.contract = props.contract;
    }

    login()
    {
        ScatterJS.plugins( new ScatterEOS() );
        try {
            ScatterJS.scatter.connect( this.contract ).then( (connected) => {
                if ( ! connected )
                    return console.log("Issue Connecting");

                const
                    scatter = ScatterJS.scatter,
                    requiredFields = { accounts: [network] };

                scatter.getIdentity(requiredFields).then(() => {
                    this.account = scatter.identity.accounts.find( (x) => x.blockchain === "eos" );
                    const rpc = new JsonRpc(endpoint);
                    this.eos = scatter.eos( network, Api, { rpc } );
                });
                window.ScatterJS = null;
            });
        } catch (error) {
            console.log(error);
        }
    }

    render()
    {
        return (
            <NavLink className="lightgray" onClick={ () => this.login() } href="#">
                login
            </NavLink>
        );
    }
}

export default Login;

