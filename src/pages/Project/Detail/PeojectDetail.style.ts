import styled from "styled-components";

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
`;
