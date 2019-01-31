/* eslint-disable import/first */

import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "react-dom";
import Helmet, { HelmetProvider } from "react-helmet-async";

// views
import Home from "./views/home";
import About from "./views/about";
import List from "./views/list";

// scatter
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2";
ScatterJS.plugins(new ScatterEOS());

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/black-dashboard-pro-react.scss?v=1.0.0";
import "./assets/demo/demo.css";

// fa
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faExclamationTriangle,
    faHandshake,
    faHeartBroken,
    faMoneyBillWave,
    faRedo
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faExclamationTriangle,
    faHandshake,
    faHeartBroken,
    faMoneyBillWave,
    faRedo
);

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./helpers/storage";
import Reducer from "./helpers/reducers";
const state = loadState();
const store = createStore(Reducer, state);
store.subscribe(() => {
    saveState({ scatter: store.getState().scatter });
});

// google analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-131505071-1");
ReactGA.pageview(window.location.pathname);
import createHistory from "history/createBrowserHistory";
const history = createHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <HelmetProvider>
                    <Helmet>
                        <meta charset="utf-8" />
                        <title>STAKEMINE</title>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1, shrink-to-fit=no"
                        />

                        <meta name="application-name" content="StakeMine" />
                        <meta
                            name="description"
                            content="Staking is the new mining! - Earn Tokens for supporting projects you love!"
                        />
                        <meta name="image" content="./assets/img/social.jpg" />

                        <meta property="og:title" content="STAKEMINE" />
                        <meta
                            property="og:description"
                            content="Staking is the new mining! - Earn Tokens for supporting projects you love!"
                        />
                        <meta
                            property="og:image"
                            content="./assets/img/social.jpg"
                        />
                        <meta
                            property="og:url"
                            content="https://stakemine.io"
                        />
                        <meta property="og:site_name" content="STAKEMINE" />
                        <meta property="og:type" content="website" />

                        <meta name="twitter:card" content="summary" />
                        <meta
                            name="twitter:site"
                            content="@officialstakemine"
                        />
                        <meta
                            name="twitter:creator"
                            content="@individual_account"
                        />
                        <meta
                            name="twitter:url"
                            content="https://twitter.com/officialstakemine"
                        />
                        <meta name="twitter:title" content="StakeMine" />
                        <meta
                            name="twitter:description"
                            content="Staking is the new mining! - Earn Tokens for supporting projects you love!s"
                        />
                        <meta
                            name="twitter:image"
                            content="./assets/img/social.jpg"
                        />
                    </Helmet>
                </HelmetProvider>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/list" component={List} exact />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);
