import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoImg from "@/assets/images/common/logo.svg";
import SearchIcon from "@/assets/images/common/search.svg";
import {
  HeaderInfoContainer,
  HeaderContainer,
  HeaderNav,
  HeaderNavButton,
  HeaderInfoButton,
  HeaderRightBox,
  HeaderMargin,
  HeaderLogo,
} from "./Header.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const checkLogin = sessionStorage.getItem("accessToken");
  const onClickMoveMyPage = () => {
    if (!checkLogin) {
      sessionStorage.setItem("login_from_path", location.pathname);
      navigate("/login");
    } else {
      navigate("/mypage");
    }
  };
  return (
    <>
      <HeaderContainer>
        <CommonCenterWrapper>
          <HeaderLogo
            onClick={() => navigate("/main")}
            src={LogoImg}
            alt="header logo"
          />
          <HeaderRightBox>
            <HeaderNav id="header_menu" className="flex_left flex_box">
              <HeaderNavButton onClick={() => navigate("/projects")}>
                프로젝트
              </HeaderNavButton>
              <HeaderNavButton onClick={() => navigate("/users")}>
                팀원 모집
              </HeaderNavButton>
              <HeaderNavButton onClick={() => navigate("/expos")}>
                전시회
              </HeaderNavButton>
              <HeaderNavButton onClick={() => navigate("/mypage")}>
                마이페이지
              </HeaderNavButton>
            </HeaderNav>
            <HeaderInfoContainer>
              <HeaderInfoButton>
                <img src={SearchIcon} alt="header search icon" />
              </HeaderInfoButton>
              <HeaderInfoButton onClick={onClickMoveMyPage}>
                {checkLogin ? "MY" : "로그인"}
              </HeaderInfoButton>
            </HeaderInfoContainer>
          </HeaderRightBox>
        </CommonCenterWrapper>
      </HeaderContainer>
      <HeaderMargin />
    </>
  );
};

export default Header;
