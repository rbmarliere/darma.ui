import { connect } from "react-redux";
import { scatterSell } from "../helpers/scatter";
import Project from "../components/project";

const mapStateToProps = (state) => { return { scatter: state.scatter }; };

const mapDispatchToProps =
    (dispatch) => {
        return {
            sell: ( scatter, contract ) => { scatterSell( dispatch, scatter, contract ); },
        };
    };

export default connect( mapStateToProps, mapDispatchToProps )(Project);

