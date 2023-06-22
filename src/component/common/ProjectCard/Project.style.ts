import styled from 'styled-components';

export const ProjectCardStyle = styled.div``;

export const Thumbnail = styled.div`
  width: 100%;
  height: 218px;
  @media screen and (max-width: 1024px) {
    height: 170px;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  background-color: grey;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.0015em;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 17px;
`;

export const Detail = styled.p`
  height: 48px;
  overflow: hidden;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 14px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const AuthorImg = styled.img`
  width: 26px;
  height: 26px;
  background-color: black;
  border-radius: 50%;
`;

export const Period = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Tags = styled.div`
  display: flex;
  gap: 16px;
`;
export const Label = styled.div`
  background-color: black;
  display: flex;
  width: 62px;
  height: 28px;
  border-radius: 31px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.0015em;
`;

export const AuthorName = styled.span``;
