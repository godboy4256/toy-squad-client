import styled from 'styled-components';

export const MiniProfileContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;

export const MiniProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const MiniProfileName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.5;
`;
export const MiniProfilePosition = styled.div`
  & > span {
    color: #999;
    font-size: 1.2rem;
  }

  font-size: 1.4rem;
`;

export const MiniProfileAppPosition = styled.div`
  margin-top: 15px;
  font-size: 1.6rem;
  & span {
    font-weight: 700;
  }
`;

export const MiniProfileLikeAndRating = styled.div`
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
