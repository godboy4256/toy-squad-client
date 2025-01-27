import styled from 'styled-components';

export const ProjectCardManageStyle = styled.li`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
`;

export const ProjectCardManageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProjectCardManageThumnail = styled.div`
  background-color: #ccc;
  width: 150px;
  height: 140px;
`;

export const ProjectCardManageContent = styled.div`
  width: calc(100% - 130px);
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectCardManageDate = styled.div`
  font-size: 1.3rem;
  line-height: 1.3;
  margin-top: 10px;
  & > div {
    display: flex;
    font-weight: 700;
    & > div {
      width: 100px;
    }
  }
  & span {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectCardManageCount = styled.div`
  font-size: 1.2rem;
`;

export const ProjectCardManageApplication = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.red};
  border-radius: 5px;
  padding: 8px 10px;
  color: white;
  font-size: 1.3rem;
`;
