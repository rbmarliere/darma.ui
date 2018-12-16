import { login, logout } from "./actions";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";

const network = {
    blockchain: "eos",
    chainId: "f29e900c77f2798c445245b21ed431a2814b28635f0bee57230080fa54982805",
    host: "10.197.70.202",
    port: 8888,
    protocol: "http"
};

export const scatterLogin = (dispatch) =>
{
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
};

export const scatterLogout = (dispatch) =>
{
    ScatterJS.scatter.connect("eosio").then( () => { ScatterJS.scatter.forgetIdentity(); });
    dispatch( logout() );
};

