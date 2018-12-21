import { connect } from "react-redux";
import { scatterStake, scatterUnstake } from "../helpers/scatter";
import Project from "../components/project";

const mapStateToProps = (state) => { return { scatter: state.scatter }; };

const mapDispatchToProps =
    (dispatch) => {
        return {
            stake: ( scatter, contract, cpu_quantity, net_quantity ) => { scatterStake( dispatch, scatter, contract, cpu_quantity, net_quantity ); },
            unstake: ( scatter, contract ) => { scatterUnstake( dispatch, scatter, contract ); },
        };
    };

export default connect( mapStateToProps, mapDispatchToProps )(Project);

