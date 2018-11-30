// @flow
// $FlowFixMe: https://github.com/facebook/react/issues/14261
import React, { Suspense, lazy } from 'react';
import useConnection from '../lib/useConnection';
import { H1 } from '../components/Type';

const ConnectionType = lazy(() => import('../components/ConnectionType'));
const Bandwidth = lazy(() => import('../components/Bandwidth'));
const RTT = lazy(() => import('../components/Rtt'));

const Index = () => {
  if (typeof window === 'undefined') return null;
  const { error, effectiveType, downlink, rtt } = useConnection();

  if (error != null) {
    return <H1>{error}</H1>;
  }

  return (
    <Suspense fallback={null}>
      <ConnectionType connection={effectiveType} />
      <Bandwidth bandwidth={downlink} />
      <RTT rtt={rtt} />
    </Suspense>
  );
};

export default Index;
