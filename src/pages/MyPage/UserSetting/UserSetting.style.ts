import styled from "styled-components";

export const UserSettingMenu = styled.ul`
  & > li {
    width: 100%;
    padding: 20px 0;
    font-size: 1.6rem;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const UserSettingDescription = styled.ul`
  color: #ccc;
  font-size: 1.3rem;
  margin-top: 10px;
`;
