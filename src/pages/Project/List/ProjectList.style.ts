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

export const ProjectListHr = styled.hr`
  margin-top: 16px;
  margin-bottom: 40px;
`;
export const ProjectListTags = styled.section`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;
export const ProjectListTag = styled.span`
  display: inline;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  line-height: 52px;
  text-align: center;
  height: 52px;
  border-radius: 26px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  :hover {
    border-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.red};
    cursor: pointer;
  }
`;
export const ProjectListMain = styled.section`
  position: relative;
  display: grid;
  justify-content: space-between;

  /* 데스크탑 */
  grid-template-columns: repeat(4, 267px);

  /* 테블릿 */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 267px);
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 267px);
  }

  hr {
    grid-column: 1/-1;
    width: 100%;
    background: #d9d9d9;
    height: 1px;
    border: 0;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

export const ProjectListSelect = styled.select`
  width: 150px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  position: absolute;
  top: -74px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;
