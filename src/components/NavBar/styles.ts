import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 125px;
  height: 100%;
  top: 80px;

  background: #53a0ef;

  text-align: center;
`;

export const Menu = styled.ul`
  list-style-type: none;

  svg {
    margin: 0 auto;
    display: block;
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
  }

  & li {
    margin-top: 50px;
  }
`;
