// @flow
import React from 'react';
import useConnection from '../lib/useConnection';
import { H1 } from '../components/Type';

const ConnectionType = React.lazy(() => import('../components/ConnectionType'));
const Bandwidth = React.lazy(() => import('../components/Bandwidth'));
const RTT = React.lazy(() => import('../components/Rtt'));

const Index = () => {
  if (typeof window === 'undefined') return null;
  const { error, effectiveType, downlink, rtt } = useConnection();

  if (error != null) {
    return <H1>{error}</H1>;
  }

  return (
    <React.Suspense fallback={<div>LOADING...........</div>} duration={1}>
      <ConnectionType connection={effectiveType} />
      <Bandwidth bandwidth={downlink} />
      <RTT rtt={rtt} />
    </React.Suspense>
  );
};

export default Index;
