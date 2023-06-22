import {
  FooterDeveloperInfo,
  FooterContainer,
  FooterPolicy,
  FooterLogo,
  FooterContent,
} from './Footer.style';
import IMGLogo from '@/assets/images/common/logo.svg';
import { CommonCenterWrapper } from '@/styles/CommonStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <CommonCenterWrapper>
        <FooterLogo src={IMGLogo} alt="header logo" />
        <FooterDeveloperInfo>
          <div>
            <FooterContent>개발자 전화번호: 010-9019-2172</FooterContent>
            <FooterContent>이메일 : godboy4256@gmail.com</FooterContent>
            <FooterContent>
              Copyright (c) 석지웅 2022. All rights reserved.
            </FooterContent>
          </div>
          <div>
            <FooterPolicy>개인정보 처리방침</FooterPolicy>
            <FooterPolicy>이용약관</FooterPolicy>
          </div>
        </FooterDeveloperInfo>
      </CommonCenterWrapper>
    </FooterContainer>
  );
};

export default Footer;
