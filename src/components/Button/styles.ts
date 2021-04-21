import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 60px 18px 20px 18px;
  padding: 18px;

  background: #007dd7;
  width: 80%;

  color: #fff;

  border-radius: 5px;
  border: 0;

  transition: background-color 0.1s;

  :hover {
    background: ${shade(0.1, '#007dd7')};
  }
`;
