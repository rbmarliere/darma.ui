import { login, logout } from "./actions";
import { Api, JsonRpc } from "eosjs";
import ScatterJS from "scatterjs-core";

const endpoint = "http://10.197.70.202:8888";
const network = {
    blockchain: "eos",
    chainId: "f29e900c77f2798c445245b21ed431a2814b28635f0bee57230080fa54982805",
    host: "10.197.70.202",
    port: 8888,
    protocol: "http"
};

export const scatterLogin = (dispatch) =>
{
    ScatterJS.scatter.connect("eosio").then( (connected) => {
        if ( ! connected )
            return false;

        const
            scatter = ScatterJS.scatter,
            requiredFields = { accounts: [network] };

        scatter.getIdentity(requiredFields).then(() => {
            dispatch( login(scatter) );
        }).catch((error) => {
            if ( error.type === "identity_rejected" )
                dispatch( logout() );
        });

        window.ScatterJS = null;
    });
};

export const scatterLogout = (dispatch) =>
{
    ScatterJS.scatter.connect("eosio").then( () => { ScatterJS.scatter.forgetIdentity(); });
    dispatch( logout() );
};

export const scatterSell = ( dispatch, scatter, contract, cpu_quantity, net_quantity ) =>
{
    const account = scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name;
    const rpc = new JsonRpc(endpoint);
    const eos = scatter.eos( network, Api, { rpc });
    eos.transact({
        actions: [{
            account: "eosio",
            name: "delegatebw",
            authorization: [{
                actor: account,
                permission: "active"
            }],
            data: {
                from: account,
                receiver: contract,
                stake_net_quantity: net_quantity,
                stake_cpu_quantity: cpu_quantity,
                transfer: false
            }
        }]
    },{
        blocksBehind: 3,
        expireSeconds: 30
    });
};

