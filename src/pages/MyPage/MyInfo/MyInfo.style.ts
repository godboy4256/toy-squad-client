import styled from 'styled-components';

export const MyInfoSetting = styled.button`
  background-color: ${({ theme }) => theme.color.red};
  color: white;
  padding: 0 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  & > div {
    margin-left: 10px;
  }
`;

export const MyPageMyInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const MyInfoContents = styled.div`
  margin-top: 40px;
`;
export const MyInfoIntro = styled.p`
  font-size: 1.6rem;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-top: 30px;
`;
export const MyInfoContent = styled.div`
  margin-bottom: 40px;
  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 5px;
    font-weight: 700;
  }
`;
export const MyInfoTendency = styled.ul`
  & > li {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.4;
  }
`;
export const MyInfoContact = styled.ul`
  & > li {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.4;
    & > div {
      margin-left: 10px;
    }
  }
`;
