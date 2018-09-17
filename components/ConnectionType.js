import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { H1, StyledLink } from './Type';

const ConnectionType = ({ connection }) => {
  if (!connection) return null;

  switch (connection) {
    case 'unknown':
      return (
        <FormattedMessage
          id="connectionType.unknown"
          defaultMessage="I have no idea how you're online"
          tagName={H1}
        />
      );
    case 'none':
      return (
        <FormattedMessage
          id="connectionType.offline"
          defaultMessage="You are not connected to the internet"
          tagName={H1}
        />
      );
    default:
      return (
        <FormattedMessage
          id="connectionType.normal"
          defaultMessage="According to {link}, you are connected via {connection}"
          values={{
            connection,
            link: (
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"
                passHref
              >
                <StyledLink target="_blank" rel="noopener external nofollow">
                  <FormattedMessage
                    id="browser"
                    defaultMessage="your browser"
                  />
                </StyledLink>
              </Link>
            ),
          }}
          tagName={H1}
        />
      );
  }
};

ConnectionType.propTypes = {
  connection: PropTypes.string,
};

ConnectionType.defaultProps = {
  connection: 'none',
};

export default ConnectionType;
