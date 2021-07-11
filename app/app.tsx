import * as React from "react";

import spacemanImg from "./assets/images/spaceman.png";
import Icon from "./assets/svgs/icon.svg";
import "./styles/app.less";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div styleName="app">
      <h1 className="title" styleName="app_title">
        Hello! It's Alan
        <Icon />
      </h1>
      <img src={spacemanImg} />
    </div>
  );
};

export { App };
