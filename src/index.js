import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
