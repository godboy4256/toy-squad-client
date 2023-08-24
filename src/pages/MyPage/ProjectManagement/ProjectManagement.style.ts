import styled from 'styled-components';

export const ProjectManageTopMenuContainer = styled.ul`
  display: flex;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 20px 0;
  & > li {
    width: 25%;
    text-align: center;
    font-size: 1.4rem;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.3);
    &:first-child {
      border-left: none;
    }
    cursor: pointer;
    & > div:first-child {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &.active {
      color: #222;
    }
  }
`;

export const ProjectManegeContent = styled.section`
  margin-top: 50px;
  height: 500px;
`;

export const ProjectDataNone = styled.div`
  font-size: 1.4rem;
  text-align: center;
  padding: 100px 0;
  color: #777;
`;

export const ProjectManageSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;
