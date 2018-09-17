import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { H2 } from './Type';

const Bandwidth = ({ bandwidth }) => {
  if (!bandwidth) return null;

  return (
    <FormattedMessage
      id="bandwidth"
      defaultMessage="Your bandwidth is {bandwidth} Mbps"
      values={{ bandwidth }}
      tagName={H2}
    />
  );
};

Bandwidth.propTypes = {
  bandwidth: PropTypes.number.isRequired,
};

export default Bandwidth;
