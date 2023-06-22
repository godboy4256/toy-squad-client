import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  /* 태블릿 */
  @media screen and (max-width: 1024px) {
    max-width: 768px;
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    max-width: 480px;
  }
`;

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FilterButton = styled.button`
  width: 70px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid #cccccc;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 13px;
  padding-bottom: 13px;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 12px;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 0.5px solid black;
  width: 27px;
`;
export const SmallCircle = styled.div`
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
`;

export const Hr = styled.hr`
  margin-top: 16px;
  margin-bottom: 40px;
`;
export const Tags = styled.section`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;
export const Tag = styled.span`
  display: inline;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #cccccc;
  line-height: 52px;
  text-align: center;
  height: 52px;
  border-radius: 26px;
  font-size: 24px;
  font-weight: 700;
  :hover {
    border-color: #e0234d;
    color: #e0234d;
  }
`;
export const Main = styled.section`
  position: relative;
  display: grid;
  justify-content: space-between;

  /* 데스크탑 */
  grid-template-columns: repeat(4, 267px);

  /* 테블릿 */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 210px);
  }

  /* 모바일 */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 210px);
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

export const Select = styled.select`
  width: 150px;
  height: 50px;
  font-size: 22px;
  text-align: center;
  position: absolute;
  top: -74px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid #cccccc;
`;
