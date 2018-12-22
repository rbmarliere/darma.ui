import { connect } from "react-redux";
import { hideError } from "../helpers/actions";
import { scatterStake, scatterUnstake, scatterClaim } from "../helpers/scatter";
import Project from "../components/project";

const mapStateToProps =
    (state) => {
        return {
            scatter: state.scatter,
            error: state.error
        };
    };

const mapDispatchToProps =
    (dispatch) => {
        return {
            stake: ( scatter, contract, cpu_quantity, net_quantity ) => { scatterStake( dispatch, scatter, contract, cpu_quantity, net_quantity ); },
            unstake: ( scatter, contract ) => { scatterUnstake( dispatch, scatter, contract ); },
            claim: ( scatter, contract ) => { scatterClaim( dispatch, scatter, contract ); },
            hideError: () => { dispatch( hideError() ); }
        };
    };

export default connect( mapStateToProps, mapDispatchToProps )(Project);

