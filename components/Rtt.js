// @flow
import React from 'react';
import { H3 } from './Type';

type Props = {
  rtt: number,
};

const RTT = ({ rtt }: Props) => <H3>Your ping is {rtt} ms</H3>;

export default RTT;
