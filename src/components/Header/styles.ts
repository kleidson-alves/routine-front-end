import styled from 'styled-components';

export const Container = styled.div`
  background-color: #007dd7;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 1;
`;
export const Menu = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 1430px;

  align-items: center;
  text-align: right;
  div {
    flex: 1;
    margin-right: 15px;
    line-height: 25px;
    color: #fff;
  }

  div span {
    font-weight: bold;
  }

  svg {
    color: #fff;
  }

  button {
    background: transparent;
    border: none;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
