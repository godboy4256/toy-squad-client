import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 60px;
`;
export const MainBanner = styled.section`
  width: 1110px;
  margin: 0 auto;
  & .slick-arrow {
    width: 48px;
    height: 48px;
    background-color: #17191c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .slick-next {
    right: -100px;
    z-index: 100000;
  }
  & .slick-prev {
    left: -100px;
    z-index: 100000;
  }
`;

export const MainSliderWrapper = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  border-radius: 30px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const BannerContent = styled.div`
  width: 397px;
  & > h2 {
    font-size: 3.2rem;
    font-weight: 700;
    padding-bottom: 40px;
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
  }
  & > p {
    font-size: 1.6rem;
    line-height: 1.4;
  }
  position: absolute;
  top: 79px;
  left: 55px;
`;

export const MainSection = styled.section`
  & > div > h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 50px;
  }
  padding: 50px 0;
`;

export const MainPageProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
  }
`;
