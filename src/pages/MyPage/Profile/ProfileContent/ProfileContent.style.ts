import styled from "styled-components";

export const ProfileContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  & > h3 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: 10px;
  }
`;

export const ProfileContentContainer = styled.div`
  background-color: #f7f7f7;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 20px;
  & > h3 {
    font-size: 1.6rem;
    margin-bottom: 5px;
    font-weight: 700;
  }
`;

export const ProfileEditButton = styled.button`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
`;
