import styled from 'styled-components';

export const ApplicationUserContainer = styled.div`
  width: 500px;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    width: 60px;
  }
`;

export const ApplicationCardButton = styled.div`
  display: flex;
  & button {
    padding: 10px 12px;
    margin-left: 10px;
    font-size: 1.4rem;
    &:last-child {
      background-color: #777;
    }
  }
`;
