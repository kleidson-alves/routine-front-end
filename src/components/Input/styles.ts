import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErroed: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;

  border: 5px solid #007dd7;
  color: #ffffff;

  & + div {
    margin-top: 30px;
  }

  display: flex;
  align-items: center;
  input {
    height: 25px;
    flex: 1;
    border: 0;
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
      opacity: 0.8;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 25px;
  margin-left: 16px;
`;
