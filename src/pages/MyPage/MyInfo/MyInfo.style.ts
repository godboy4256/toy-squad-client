import styled from 'styled-components';

export const MyInfoUserProfile = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;
export const MyInfoName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;
export const MyInfoPosition = styled.div`
  & > span {
    color: #999;
    font-size: 1.2rem;
  }
  font-size: 1.4rem;
`;
export const MyInfoUserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const MyInfoDefaultInfo = styled.div`
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  & > span {
    display: flex;
    margin: 0 5px;
  }
`;
export const MyInfoEvaluationInfo = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  & > div {
    margin-right: 10px;
    & > span {
      margin-left: 5px;
      font-weight: 700;
    }
    &:first-of-type {
      svg {
        color: #00cc66;
      }
    }
    &:last-of-type {
      svg {
        color: #ffcc00;
      }
    }
  }
`;

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
