import { DeveloperInfo, FooterContainer, Policy } from './Footer.style';
import IMGLogo from '/assets/images/common/logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <img src={IMGLogo} alt="header logo" />
        <DeveloperInfo>
          <div>
            <p>개발자 전화번호: 010-9019-2172</p>
            <p>이메일 : godboy4256@gmail.com</p>
            <p>Copyright (c) 석지웅 2022. All rights reserved.</p>
          </div>
          <Policy>
            <span>개인정보 처리방침</span>
            <span>이용 약관</span>
          </Policy>
        </DeveloperInfo>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
