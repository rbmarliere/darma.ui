import { login, logout } from "./actions";
import { Api, JsonRpc, RpcError } from "eosjs";
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

export const scatterStake = ( dispatch, scatter, contract, cpu_quantity, net_quantity ) =>
{
    const account = scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name;
    const rpc = new JsonRpc(endpoint);
    const eos = scatter.eos( network, Api, { rpc });
    try {
        eos.transact({
            actions: [
                {
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
                },
                {
                    account: contract,
                    name: "stake",
                    authorization: [{
                        actor: account,
                        permission: "active"
                    }],
                    data: {
                        holder: account
                    }
                },
            ]
        },{
            blocksBehind: 5,
            expireSeconds: 30
        });
    } catch (err) {
        if (err instanceof RpcError) {
            // dispatch
        }
    }
};

export const scatterUnstake = async ( dispatch, scatter, contract ) =>
{
    const account = scatter.identity.accounts.find( (x) => x.blockchain === "eos" ).name;
    const rpc = new JsonRpc(endpoint);
    const eos = scatter.eos( network, Api, { rpc });
    const deleg =
        await rpc.get_table_rows(
            {
                code: "eosio",
                scope: account,
                table: "delband",
                lower_bound: contract
            }
        );

    try {
        const cpu_quantity = deleg.rows[0].cpu_weight;
        const net_quantity = deleg.rows[0].net_weight;
        eos.transact({
            actions: [
                {
                    account: "eosio",
                    name: "undelegatebw",
                    authorization: [{
                        actor: account,
                        permission: "active"
                    }],
                    data: {
                        from: account,
                        receiver: contract,
                        unstake_net_quantity: net_quantity,
                        unstake_cpu_quantity: cpu_quantity,
                        transfer: false
                    }
                },
                {
                    account: contract,
                    name: "unstake",
                    authorization: [{
                        actor: account,
                        permission: "active"
                    }],
                    data: {
                        holder: account
                    }
                },
            ]
        },{
            blocksBehind: 5,
            expireSeconds: 30
        });
    } catch (err) {
        if (err instanceof RpcError) {
            // dispatch
        }
    }
};

