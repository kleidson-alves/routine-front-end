import styled from 'styled-components';

export const Container = styled.div`
  border: 5px solid #007dd7;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 30px;
  }

  display: flex;
  align-items: center;
  input {
    flex: 1;
    border: 0;
    background-color: transparent;

    color: #ffffff;

    &::placeholder {
      color: #ffffff;
    }
  }
`;
