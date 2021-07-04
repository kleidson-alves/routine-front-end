import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding-top: 120px;
  margin-left: 60px;
  width: 85%;
  margin: 0 auto;
`;

export const Routines = styled.div`
  display: flex;

  ul {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 10px;
    list-style-type: none;
    align-items: center;
    margin: 0 auto;
  }

  li {
    text-align: center;
    height: 300px;
    background-color: gray;
    border: 1px solid black;
  }

  li:nth-child(7) {
    grid-column-start: 2;
  }
`;
