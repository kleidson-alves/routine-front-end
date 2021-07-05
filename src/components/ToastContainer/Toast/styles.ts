import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'error' | 'success' | 'info';
  hasdescription: number;
}

const toastTypesVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 18px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;

  & {
    margin-top: 8px;
  }

  ${props => toastTypesVariations[props.type || 'info']}

  > svg {
    margin: 5px 12px 0 0;
  }

  div {
    flex: 1;
  }

  p {
    margin-top: 4px;
    font-size: 15px;
    opacity: 0.8;
    line-height: 20px;
  }

  button {
    position: absolute;
    right: 18px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
