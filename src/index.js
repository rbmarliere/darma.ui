/* eslint-disable import/first */

import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "react-dom";

// views
import Home from "./views/home";
import About from "./views/about";
import List from "./views/list";

// scatter
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";
ScatterJS.plugins( new ScatterEOS() );

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// fa
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
library.add( faTelegram );

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./helpers/storage";
import Reducer from "./helpers/reducers";
const state = loadState();
const store = createStore( Reducer, state );
store.subscribe( () => { saveState({ scatter: store.getState().scatter }); } );

// google analytics
import ReactGA from "react-ga";
ReactGA.initialize( "UA-131505071-1" );
ReactGA.pageview( window.location.pathname );
import createHistory from "history/createBrowserHistory";
const history = createHistory();
history.listen( (location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview( location.pathname );
});

render(
    <Provider store={ store }>
        <Router history={ history }>
            <div>
                <Route path="/"      component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/list"  component={List} exact />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);

