import React, { useState } from 'react';

const Count: React.SFC = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((preCount) => ++preCount);
  };
  return (
    <div data-testid="count" onClick={onClick}>
      {count}
    </div>
  );
};

export default Count;
