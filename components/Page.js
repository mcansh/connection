// @flow
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Meta from './Meta';
import GlobalStyles from './GlobalStyles';
import { StyledLink } from './Type';

const ExtendedStyledLink = styled(StyledLink)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
  font-size: 1.6rem;
`;

type Props = {
  children: React.Node,
};

const Page = ({ children }: Props) => (
  <>
    <Meta />
    <GlobalStyles />
    {children}
    <Link href="https://github.com/mcansh/connection" passHref>
      <ExtendedStyledLink target="_blank">src</ExtendedStyledLink>
    </Link>
  </>
);

export default Page;
