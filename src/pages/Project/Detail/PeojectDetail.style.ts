import styled from 'styled-components';

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 3rem;
`;
export const Tags = styled.div`
  display: flex;
  gap: 12px;
`;
export const ProjectDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 140px;
  margin-bottom: 30px;
`;

export const ProjectDetailThumbnail = styled.img`
  background-color: grey;
  width: 100%;
  height: 324px;
`;

export const DetailContainer = styled.div`
  width: 724px;
`;

export const TumbnailSection = styled.section``;
export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  margin-bottom: 19px;
`;
export const SimpleDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const Hr = styled.hr`
  background: ${({ theme }) => theme.color.lightGrey};
  margin: 0;
  height: 1px;
  border: 0;
`;
