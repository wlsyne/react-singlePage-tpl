import React from 'react';

import './index.less';
import Icon from '@app/assets/svgs/icon.svg';

export interface TitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name = '' }) => {
  return (
    <h1 className="title" styleName="app_title">
      {`Hello! It's ${name}`}
      <Icon />
    </h1>
  );
};

export default Title;
