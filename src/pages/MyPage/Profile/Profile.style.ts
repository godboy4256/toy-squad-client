import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const MyInfoSetting = styled.button`
  /* background-color: ${({ theme }) => theme.color.red}; */
  color: #777;
  font-size: 1.7rem;
`;
export const MyInfoIntro = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
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
export const ProfileNoValue = styled.div`
  color: #ccc;
  font-size: 1.5rem;
  font-style: italic;
`;
