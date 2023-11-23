import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 90px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100001;
  background-color: white;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    height: 70px;
    padding: 0 20px;
  }
`;

export const HeaderNav = styled.nav`
  font-weight: 900;
  margin-right: 48px;
  @media screen and (max-width: 500px) {
    width: 100%;
    position: fixed;
    margin-right: 0;
    background: white;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    padding: 10px 0;
    background-color: #f6f6f6;
    display: flex;
  }
`;

export const HeaderLogo = styled.img`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 140px;
  }
`;

export const HeaderNavButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:last-of-type {
    display: none;
  }
  &:nth-last-of-type(2) {
    margin-right: 0;
  }
  @media screen and (max-width: 500px) {
    width: 25%;
    font-size: 1.2rem;
    margin: 0;
    box-sizing: border-box;
    &:last-of-type {
      display: block;
    }
  }
`;

export const HeaderInfoContainer = styled.div`
  display: flex;
`;

export const HeaderRightBox = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const HeaderInfoButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  display: flex;
  background-color: #e0234d;
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    &:last-of-type {
      display: none;
    }
  }
`;

export const HeaderMargin = styled.div`
  height: 90px;
  @media screen and (max-width: 500px) {
    height: 70px;
  }
`;
