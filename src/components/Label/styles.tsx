import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 2px solid;
  border-color: #007dd7;
  height: 60px;

  align-items: center;
  justify-content: center;

  max-width: 450px;

  input {
    display: flex;
    flex: 1;
    border: none;
    text-align: center;
  }
`;
