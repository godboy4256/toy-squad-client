import styled from 'styled-components';

export const PositionContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PositionCategory = styled.div`
  font-size: 1.5rem;
  padding-top: 10px;
  background-color: #f9f9f9;
  & li {
    width: 130px;
    cursor: pointer;
    padding: 10px 20px;
    &.activer {
      background-color: ${({ theme }) => theme.color.red};
      color: white;
    }
  }
`;

export const PositionTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  padding: 15px 0;
`;

export const PositionList = styled.ul`
  padding-top: 10px;
  width: 200px;
  height: 230px;
  overflow: auto;
  & li {
    cursor: pointer;
    font-size: 1.5rem;
    padding: 10px;
  }
`;

export const PositionTab = styled.div`
  display: flex;
`;

export const PositionConfirm = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
  & button {
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.color.red};
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    display: block;
    margin-left: 10px;
    &:last-of-type {
      background-color: #ccc;
      color: #222;
    }
  }
`;
