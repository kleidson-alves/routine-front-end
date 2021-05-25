import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  align-items: center;

  border: solid #007dd7 2px;
  border-radius: 50px 50px 0 0;

  position: relative;
  > svg {
    margin: 20px 20px 20px 0;
    color: #007dd7;
    align-self: flex-end;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -35px;

  div {
    border-radius: 10px;
    background-color: #fff;
  }
  input {
    font-family: 'Roboto Condensed', serif;
    font-size: 36px;
    text-transform: uppercase;
  }

  width: 482px;
  height: 60px;
  left: 495px;
`;

export const Time = styled.div`
  display: flex;
  border: 2px solid;
  border-color: #007dd7;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.th`
  border: 2px solid;
  border-color: #007dd7;
  height: 60px;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    max-width: 400px;
  }

  margin-bottom: 100px;
`;
