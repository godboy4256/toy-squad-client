import styled from "styled-components";

export const ProjectCardStyle = styled.div`
  padding: 5px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
  cursor: pointer;
  box-sizing: border-box;
`;

export const ProjectThumbnail = styled.div`
  width: 100%;
  height: 218px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  background-color: grey;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
`;
export const ProjectTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
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
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ProjectPeriod = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ProjectTags = styled.div`
  display: flex;
  gap: 16px;
`;
