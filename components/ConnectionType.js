// @flow
import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { H1, StyledLink } from './Type';

const effectiveTypes = [
  { type: 'slow-2g', name: 'Slow 2G' },
  { type: '2g', name: '2G' },
  { type: '3g', name: '3G' },
  { type: '4g', name: '4G' },
];

type Props = {
  connection: string,
};

const ConnectionType = ({ connection }: Props) => {
  switch (connection) {
    case 'unknown':
      return (
        <H1>
          <FormattedMessage
            id="connectionType.unknown"
            defaultMessage="I have no idea how you're online"
          />
        </H1>
      );
    case 'offline':
      return (
        <H1>
          <FormattedMessage
            id="connectionType.offline"
            defaultMessage="You are not connected to the internet"
          />
        </H1>
      );
    case 'slow-2g':
    case '2g':
    case '3g':
    case '4g': {
      const type = effectiveTypes.find(efftype => efftype.type === connection);
      return (
        <H1>
          <FormattedMessage
            id="connectionType.normal"
            defaultMessage="According to {link}, you are connected via {connection}"
            values={{
              connection: type ? type.name : 'magic',
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
          />
        </H1>
      );
    }
    default:
      return null;
  }
};

export default ConnectionType;
