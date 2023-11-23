import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 50px;
`;
export const MainBanner = styled.section`
  max-width: 1110px;
  width: 100vw;
  margin: 0 auto;
  & .slick-arrow {
    width: 48px;
    height: 48px;
    background-color: #17191c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 500px) {
      display: none !important;
    }
  }
  & .slick-next {
    right: -100px;
    z-index: 100000;
  }
  & .slick-prev {
    left: -100px;
    z-index: 100000;
  }
  @media screen and (max-width: 500px) {
    width: 94vw;
  }
`;

export const MainSliderWrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  background-color: #ccc;
  border-radius: 20px;
  @media screen and (max-width: 500px) {
    height: 240px;
  }
`;

export const BannerContent = styled.div`
  & > h2 {
    font-size: 3.2rem;
    font-weight: 700;
    padding-bottom: 40px;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
      padding-bottom: 24px;
    }
  }
  & > a {
    width: fit-content;
    display: block;
    padding: 0 30px;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    border-radius: 20px;
    line-height: 48px;
    margin-bottom: 20px;
    @media screen and (max-width: 500px) {
      font-size: 1.3rem;
      padding: 0 20px;
      margin-bottom: 15px;
      line-height: 40px;
    }
  }
  & > p {
    font-size: 1.6rem;
    line-height: 1.4;
    @media screen and (max-width: 500px) {
      font-size: 1.3rem;
    }
  }
  width: 397px;
  position: absolute;
  top: 79px;
  left: 55px;
  @media screen and (max-width: 500px) {
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    padding: 30px;
  }
`;

export const MainSection = styled.section`
  padding: 50px 0;
`;

export const MainSectionHeader = styled.div`
  & > h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  & > a {
    padding: 11px 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0b2239;
    border-radius: 30px;
    font-size: 1.4rem;
  }
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

export const MainPageProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    @media screen and (max-width: 500px) {
      width: 50%;
    }
  }
`;
export const MainPageUserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: 49%;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

export const MainSectionTopProject = styled.div``;
