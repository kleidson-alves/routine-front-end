import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  align-items: stretch;
  background-color: #53a0ef;

  > header {
    display: flex;
    background-color: #007dd7;
    height: 120px;
    justify-content: center;
    align-items: center;

    div {
      width: 1120px;

      svg {
        color: #fff;
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  text-align: center;

  max-width: 500px;
  margin: 0 auto;
  margin-top: -120px;
`;

export const AvatarInput = styled.div`
  position: relative;
  padding-top: 40px;
  margin-bottom: 40px;

  img {
    display: block;
    height: 150px;
    width: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 0 auto;
  }

  label {
    position: absolute;
    bottom: -10px;
    right: 36%;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 50%;
    background-color: #007dd7;

    transition: background-color 0.3s;
    cursor: pointer;

    :hover {
      background-color: ${shade(0.2, '#007dd7')};
    }

    svg {
      color: #fff;
      width: 25px;
      height: 25px;
    }

    input {
      display: none;
    }
  }
`;

export const DefaultUser = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 60px;

  margin: 0 auto;
  height: 150px;
  width: 150px;

  border: 2px solid #fff;
  border-radius: 50%;
  padding: 40px;
`;
