import styled from 'styled-components';

export const ProjectListHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 168px;
`;
export const ProjectListFilterButton = styled.button`
  width: 70px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 13px;
  padding-bottom: 13px;
`;
export const ProjectListSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-right: 12px;
`;
export const ProjectListFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProjectListLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 0.5px solid black;
  width: 27px;
`;
export const ProjectListSmallCircle = styled.div`
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
`;
