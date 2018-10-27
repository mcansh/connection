import React from 'react';
import dynamic from 'next/dynamic';
import useConnection from '../lib/useConnection';
import { H1 } from '../components/Type';

const ConnectionType = dynamic({
  loader: () => import('../components/ConnectionType'),
});
const Bandwidth = dynamic({
  loader: () => import('../components/Bandwidth'),
});
const RTT = dynamic({
  loader: () => import('../components/Rtt'),
});

const Index = () => {
  if (typeof window === 'undefined') return null;
  const { error, effectiveType, downlink, rtt } = useConnection();

  console.log({ error, effectiveType, downlink, rtt });

  if (error) {
    return <H1>{error}</H1>;
  }

  return (
    <>
      <ConnectionType connection={effectiveType} />
      <Bandwidth bandwidth={downlink} />
      <RTT rtt={rtt} />
    </>
  );
};

export default Index;
