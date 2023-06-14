import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 9rem;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: white;
  & > .common_wrapper {
    height: 100%;
    align-items: center;
  }
`;

export const HeaderNav = styled.nav`
  margin-right: 2rem;
  font-size: 1.8rem;
`;

export const HeaderNavButton = styled.button`
  margin: 0 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const HeaderInfoContainer = styled.div`
  display: flex;
`;

export const HeaderInfoButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;
