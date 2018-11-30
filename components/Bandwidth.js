// @flow
import React from 'react';
import { H2 } from './Type';

type Props = {
  bandwidth: number,
};

const Bandwidth = ({ bandwidth }: Props) => (
  <H2>Your bandwidth is {bandwidth} Mbps</H2>
);

export default Bandwidth;
