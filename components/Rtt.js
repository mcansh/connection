import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { H3 } from './Type';

const RTT = ({ rtt }) => {
  if (!rtt) return null;

  return (
    <FormattedMessage
      id="rtt"
      defaultMessage="Your ping is {rtt} ms"
      values={{ rtt }}
      tagName={H3}
    />
  );
};

RTT.propTypes = {
  rtt: PropTypes.number.isRequired,
};

export default RTT;
