import styled from 'styled-components';

export const Container = styled.div`
  background-color: #007dd7;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 10;
`;
export const Menu = styled.ul`
  margin: 0 auto;
  width: 1600px;

  text-align: right;
  list-style-type: none;

  svg {
    margin-top: 15px;
    color: #fff;
  }

  button {
    margin-right: 25px;
    background: transparent;
    border: none;
  }
`;
