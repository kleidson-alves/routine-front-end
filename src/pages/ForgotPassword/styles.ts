import styled, { keyframes } from 'styled-components';

import background from '../../assets/signIn-bg.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background-color: #53a0ef;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from{
    transform: translateX(-50px);
    opacity: 0;
  }
  to{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    opacity: 1;

    transition: opacity 0.1s;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
