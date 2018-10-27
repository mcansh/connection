// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H3 } from './Type';

type Props = {
  rtt: number,
};

const RTT = ({ rtt }: Props) => (
  <H3>
    <FormattedMessage
      id="rtt"
      defaultMessage="Your ping is {rtt} ms"
      values={{ rtt }}
    />
  </H3>
);

export default RTT;
