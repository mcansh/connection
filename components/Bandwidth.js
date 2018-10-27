// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2 } from './Type';

type Props = {
  bandwidth: number,
};

const Bandwidth = ({ bandwidth }: Props) => (
  <H2>
    <FormattedMessage
      id="bandwidth"
      defaultMessage="Your bandwidth is {bandwidth} Mbps"
      values={{ bandwidth }}
    />
  </H2>
);

export default Bandwidth;
