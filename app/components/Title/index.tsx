import React from 'react';
import { add } from 'ramda';

import './index.less';
import Icon from '@app/assets/svgs/icon.svg';

export interface TitleProps {
  name: string;
}
const { useState } = React;
const Title: React.FC<TitleProps> = ({ name = '' }) => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(add(1)(count));
  };

  return (
    <h1 className="title" styleName="app_title" onClick={click}>
      {`Hello! It's ${name} ${count}`}
      <Icon />
    </h1>
  );
};

export default Title;
