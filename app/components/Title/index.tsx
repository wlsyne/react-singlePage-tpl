import React from 'react';

import './index.less';
import Icon from '@app/assets/svgs/icon.svg';

const Title: React.FC = () => {
  return (
    <h1 className="title" styleName="app_title">
      {"Hello! It's Alan"}
      <Icon />
    </h1>
  );
};

export default Title;
