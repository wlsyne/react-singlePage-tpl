import React, { ReactNode, Suspense, SuspenseProps } from 'react';

export interface LazyCompProps {
  children: ReactNode;
  fallback?: SuspenseProps['fallback'];
}

const LazyComp: React.SFC<LazyCompProps> = ({ children, fallback }) => {
  return <Suspense fallback={fallback || <div />}>{children}</Suspense>;
};

export default LazyComp;
