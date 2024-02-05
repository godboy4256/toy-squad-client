import * as React from "react";
import Slider from "react-slick";
import {
  BannerContent,
  MainBanner,
  MainContainer,
  MainPageProjectList,
  MainPageUserList,
  MainSection,
  MainSectionHeader,
  MainSliderWrapper,
} from "./MainPage.style";
import { Link } from "react-router-dom";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import ProjectCard from "@/component/common/ProjectCard/ProjectCard";
import MiniProfileCard from "@/component/common/UserInfo/MiniProfileCard";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";

const ExampleUserList = [
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
  {
    name: "김민수",
    position: "웹 프론트엔드 개발자",
    level: "주니어",
    rating: 5,
    like: 30,
  },
];

const MainPage = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
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
            {/* <img src={MainBannerIMG} alt="main banner slider 1" /> */}
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
            {/* <img src={MainBannerIMG} alt="main banner slider 2" /> */}
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
            {/* <img src={MainBannerIMG} alt="main banner slider 3" /> */}
          </MainSliderWrapper>
        </Slider>
      </MainBanner>
      <MainSection>
        <CommonCenterWrapper>
          <MainSectionHeader>
            <h2>팀원을 모집중인 프로젝트</h2>
            <Link to="/projects">
              모두 보기
              <img
                src="/assets/images/common/more_arrow.svg"
                alt="more arrow icon"
              />
            </Link>
          </MainSectionHeader>
          <MainPageProjectList>
            {[1, 2, 3, 4, 5, 6, 7, 8].fill(1).map((el, idx) => {
              return (
                <ProjectCard key={ListKeyGenerater(idx, String(el))} id={el} />
              );
            })}
          </MainPageProjectList>
        </CommonCenterWrapper>
      </MainSection>
      <MainSection>
        <CommonCenterWrapper>
          <MainSectionHeader>
            <h2>프로젝트를 함께할 팀원 모집</h2>
            <Link to="/users">
              모두 보기
              <img
                src="/assets/images/common/more_arrow.svg"
                alt="more arrow icon"
              />
            </Link>
          </MainSectionHeader>
          <MainPageUserList>
            {ExampleUserList.map((user_info, idx) => {
              return (
                <MiniProfileCard
                  key={ListKeyGenerater(idx, user_info.name)}
                  name={user_info.name}
                  position={user_info.position}
                  rating={user_info.rating}
                  like={user_info.like}
                  imgUrl=""
                />
              );
            })}
          </MainPageUserList>
        </CommonCenterWrapper>
      </MainSection>
    </MainContainer>
  );
};

export default MainPage;
