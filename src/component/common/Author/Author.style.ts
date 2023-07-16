import styled from "styled-components";

export const AuthorName = styled.span``;
export const AuthorStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const AuthorImg = styled.img`
  width: 26px;
  height: 26px;
  background-color: black;
  border-radius: 50%;
`;
