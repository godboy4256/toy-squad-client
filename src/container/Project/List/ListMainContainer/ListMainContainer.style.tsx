import styled from "styled-components";

export const ProjectListMain = styled.section`
  display: flex;
`;

export const ProjectListSelect = styled.select`
  width: 150px;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  & .ant-select {
    margin-bottom: 20px;
  }
`;

export const ProjectListWrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: space-between;

  /* 데스크탑 */
  grid-template-columns: repeat(3, 1fr);

  /* 테블릿 */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-row-gap: 20px;
  grid-column-gap: 0px;
`;
