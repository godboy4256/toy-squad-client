import styled from 'styled-components';

export const MyPageContainer = styled.div``;
export const MyPageSideMenu = styled.nav`
  width: 20%;
  padding-right: 30px;
  & ul {
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    &:last-of-type {
      border-bottom: none;
    }
  }
  & ul > li {
    font-size: 1.6rem;
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  & ul > li > img {
    width: 80px;
    margin-right: 10px;
  }
`;
export const MyPageSection = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  padding: 30px;
`;
export const MyPageWrapper = styled.div`
  display: flex;
`;
export const MyPageTitle = styled.h2`
  padding: 50px 0 30px;
  font-size: 2rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const MyPageSectionTitle = styled.h3`
  font-size: 1.7rem;
`;
