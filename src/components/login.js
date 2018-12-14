import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Api, JsonRpc } from "eosjs";
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
                    return false;

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

    trx( action, data )
    {
        return this.eos.transact({
            actions: [{
                account: this.contract,
                name: action,
                authorization: [{
                    actor: this.account.name,
                    permission: this.account.authority
                }],
                data: {
                    ...data
                },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        });
    }

    render()
    {
        const action = "buyrambytes";
        const data = {
            buyer: "accountnum11",
            payer: "accountnum11",
            receiver: "accountnum11",
            bytes: 100
        };
        return (
            <div>
                <NavLink className="lightgray" onClick={ () => this.login() } href="#">
                login
                </NavLink>
                <NavLink className="lightgray" onClick={ () => this.trx(action,data) } href="#">
                test tx
                </NavLink>
            </div>
        );
    }
}

export default Login;

