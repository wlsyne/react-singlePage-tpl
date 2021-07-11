import * as React from "react";

import "./styles/app.less";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1 className='title' styleName="app_title">Hello! It's Alan</h1>
    </div>
  );
};

export { App };
