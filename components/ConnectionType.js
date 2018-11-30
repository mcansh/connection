// @flow
import React from 'react';
import Link from 'next/link';
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
      return <H1>I have no idea how {"you're"} online</H1>;
    case 'offline':
      return <H1>You are not connected to the internet</H1>;
    case 'slow-2g':
    case '2g':
    case '3g':
    case '4g': {
      const type = effectiveTypes.find(efftype => efftype.type === connection);
      return (
        <H1>
          According to{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"
            passHref
          >
            <StyledLink target="_blank" rel="noopener external nofollow">
              your browser
            </StyledLink>
          </Link>
          , you are connected via {type ? type.name : 'magic'}
        </H1>
      );
    }
    default:
      return null;
  }
};

export default ConnectionType;
