import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./helpers/storage";
import Reducer from "./helpers/reducers";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add( faDharmachakra, faGithub );

const state = loadState();
const store = createStore( Reducer, state );
store.subscribe( () => { saveState({ scatter: store.getState().scatter }); } );

ReactDOM.render(
    <Provider store={ store }>
        <Main/>,
    </Provider>,
    document.getElementById("root")
);

