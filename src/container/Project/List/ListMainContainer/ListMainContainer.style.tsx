import styled from 'styled-components';

export const ProjectListMain = styled.section`
  position: relative;
  display: grid;
  justify-content: space-between;

  /* 데스크탑 */
  grid-template-columns: repeat(4, 1fr);

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
