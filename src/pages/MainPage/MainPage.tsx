import * as React from "react";
import Slider from "react-slick";
import {
  BannerContent,
  MainBanner,
  MainContainer,
  MainPageProjectList,
  MainSection,
  MainSliderWrapper,
} from "./MainPage.style";
import MainBannerIMG from "@/assets/images/common/main_banner.jpg";
import { Link } from "react-router-dom";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import ProjectCard from "@/component/common/ProjectCard/ProjectCard";

const MainPage = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <MainContainer>
      <MainBanner>
        <Slider {...settings}>
          <MainSliderWrapper>
            <BannerContent>
              <h2>팀원으로 모집중인 프로젝트에 참여하세요</h2>
              <Link to="/projects">모집중인 프로젝트</Link>
              <p>
                프로젝트를 함께 할 팀원을 모집하세요. 프로젝트를 함께 할 팀원을
                모집하세요. 프로젝트를 함께 할 팀원을 모집
              </p>
            </BannerContent>
            <img src={MainBannerIMG} alt="main banner slider 1" />
          </MainSliderWrapper>
          <MainSliderWrapper>
            <BannerContent>
              <h2>팀원으로 모집중인 프로젝트에 참여하세요</h2>
              <Link to="/projects">프로젝트 생성</Link>
              <p>
                프로젝트를 함께 할 팀원을 모집하세요. 프로젝트를 함께 할 팀원을
                모집하세요. 프로젝트를 함께 할 팀원을 모집
              </p>
            </BannerContent>
            <img src={MainBannerIMG} alt="main banner slider 2" />
          </MainSliderWrapper>
          <MainSliderWrapper>
            <BannerContent>
              <h2>팀원으로 모집중인 프로젝트에 참여하세요</h2>
              <Link to="/projects">전시회 보러가기</Link>
              <p>
                프로젝트를 함께 할 팀원을 모집하세요. 프로젝트를 함께 할 팀원을
                모집하세요. 프로젝트를 함께 할 팀원을 모집
              </p>
            </BannerContent>
            <img src={MainBannerIMG} alt="main banner slider 3" />
          </MainSliderWrapper>
        </Slider>
      </MainBanner>
      <MainSection>
        <CommonCenterWrapper>
          <h2>인기 완성 프로젝트 TOP 3</h2>
        </CommonCenterWrapper>
      </MainSection>
      <MainSection>
        <CommonCenterWrapper>
          <h2>팀원을 모집중인 프로젝트</h2>
          <MainPageProjectList>
            {[1, 2, 3, 4, 5, 6, 7, 8].fill(1).map((el) => {
              return <ProjectCard id={el} />;
            })}
          </MainPageProjectList>
        </CommonCenterWrapper>
      </MainSection>
      <MainSection>
        <CommonCenterWrapper>
          <h2>프로젝트를 함께할 팀원 모집</h2>
        </CommonCenterWrapper>
      </MainSection>
    </MainContainer>
  );
};

export default MainPage;
