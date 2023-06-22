import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: white;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderNav = styled.nav`
  font-size: 18px;
  font-weight: 900;
  margin-right: 48px;
`;

export const HeaderNavButton = styled.button`
  margin: 0 1rem;
  font-weight: 700;
  &:last-child {
    margin-right: 0;
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
`;
