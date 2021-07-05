import styled from 'styled-components';

export const Container = styled.div`
  > button {
    color: #fff;
    position: fixed;
    left: 7%;
    z-index: 10;
    top: 20px;
    border: none;
    background: transparent;
  }
`;

export const Content = styled.div`
  padding-top: 120px;

  form {
    width: 700px;
    height: 600px;

    margin: 0 auto;
    text-align: center;
  }
`;

export const Title = styled.div`
  > div {
    border-width: 0 0 2px 0;
    margin: 0 auto;
    justify-content: center;

    width: 60%;
    margin-bottom: 40px;

    input {
      color: #000;
      font-size: 36px;
      padding: 20px;
      text-align: center;

      ::placeholder {
        color: #000;
        opacity: 0.4;
      }
    }
  }
`;
