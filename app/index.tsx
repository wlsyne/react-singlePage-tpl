import React from "react";
import { render } from "react-dom";

import BaseRouter from "./router/index";

import './styles/reset.less';

render(<BaseRouter />, document.getElementById("app"));
