import * as React from "react";

import Styles from "./styles/app.less";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1 className={Styles.title}>Hello! It's Alan</h1>
    </div>
  );
};

export { App };
