import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 150px;
    background-color: #0385e2;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #1e5ce2 transparent;
      border-width: 5px 5px 0 5px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
