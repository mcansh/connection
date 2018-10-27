// @flow
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3.2rem;
  margin: 1rem 0;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2.4rem;
  margin: 1rem 0;

  @media (min-width: 600px) {
    font-size: 3.2rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2.1rem;
  margin: 1rem 0;

  @media (min-width: 600px) {
    font-size: 2.4rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
