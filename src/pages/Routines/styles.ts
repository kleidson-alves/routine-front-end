import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 1430px;

  padding-top: 120px;
  margin: 0 auto;
`;

export const RoutineList = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 60px;

  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 50px;

  div {
    position: relative;
    height: 150px;
    padding: 60px;

    text-align: center;
    text-transform: uppercase;

    border: 3px solid #53a0ef;
    border-radius: 15px;

    svg {
      color: #53a0ef;
    }

    > svg {
      position: absolute;
      bottom: 5px;
      right: 20px;
    }
  }

  div:last-child {
    border-style: dashed;
  }

  button {
    background: transparent;
    border: none;
    padding: 55px 130px;
    margin: -60px;
  }
`;
