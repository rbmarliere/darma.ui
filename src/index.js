/* eslint-disable import/first */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";

// views
import Home from "./views/home";
import About from "./views/about";

// scatter
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";
ScatterJS.plugins( new ScatterEOS() );

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// fa
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
library.add( faDharmachakra, faGithub, faTelegram );

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./helpers/storage";
import Reducer from "./helpers/reducers";
const state = loadState();
const store = createStore( Reducer, state );
store.subscribe( () => { saveState({ scatter: store.getState().scatter }); } );

render(
    <Provider store={ store }>
        <BrowserRouter>
            <div>
                <Route path="/"      component={Home} exact />
                <Route path="/about" component={About} exact />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

