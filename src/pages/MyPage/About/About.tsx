import React from "react";
import styled from "styled-components";
import { MyPageSectionTitle } from "../MyPage.style";
import IMGLogo from "@/assets/images/common/logo.svg";

const AboutContainer = styled.div``;
const AboutMainSection = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  & img {
    width: 40%;
    margin: 0 auto;
    display: block;
  }
`;

const AboutIntroContent = styled.div`
  border: 1px solid #ccc;
  margin: 20px 0;
  padding: 30px 100px;
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: center;
`;

const AboutContent = styled.div`
  margin-bottom: 40px;
  font-size: 1.6rem;
  line-height: 1.5;
`;
const AboutTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;

const About = () => {
  return (
    <AboutContainer>
      <MyPageSectionTitle>
        <img src={IMGLogo} alt="logo" />
      </MyPageSectionTitle>

      <AboutMainSection>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-analysis-by-project-team-4344728-3605216.png" />
      </AboutMainSection>

      <AboutIntroContent>
        토이스쿼드는 사이드 프로젝트 커뮤니티 사이트입니다.
        <br /> 프로젝트를 함께할 팀원을 모을 수 있습니다.
      </AboutIntroContent>
      <AboutContent>
        <AboutTitle>서비스 이용 안내</AboutTitle>
      </AboutContent>
      <AboutContent>
        <AboutTitle>페이지 소개</AboutTitle>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
