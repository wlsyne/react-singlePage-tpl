import React, { lazy } from 'react';

import LazyComp from './components/LazyComp';

import spacemanImg from '@app/assets/images/spaceman.png';
import './styles/app.less';

const Title = lazy(() => import(/* webpackChunkName: "App_Title" */ './components/Title'));
const App: React.FC = () => {
  return (
    <div styleName="app">
      <LazyComp>
        <Title />
      </LazyComp>
      <img src={spacemanImg} />
    </div>
  );
};

export { App };
