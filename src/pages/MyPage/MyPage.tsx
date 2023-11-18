import * as React from "react";
import { useState } from "react";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import { Route, Routes, useNavigate } from "react-router-dom";
import IMGLogo from "@/assets/images/common/logo.svg";
import MyInfo from "./MyInfo/MyInfo";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import UserManagement from "./UserManagement/UserManagement";
import Announcement from "./Announcement/Announcement";
import About from "./About/About";
import { useEffect } from "react";
import {
  MyPageContainer,
  MyPageSection,
  MyPageSideMenuContainer,
  MyPageTitle,
  MyPageWrapper,
} from "./MyPage.style";
import UserDelete from "./UserDelete/UserDelete";
import axios from "axios";

const MyPageSideMenu = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState("my_info");
  const getMyPage = async () => {
    const response = await axios.get(
      "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/mypage"
      // { withCredentials: true }
    );
    console.log(response);
  };
  getMyPage();
  const onClickRouting = (path: string) => {
    setPath(path);
    navigate(path);
  };
  useEffect(() => {
    if (location.pathname === "/mypage") {
      navigate("/mypage/my_info");
    }
  }, []);
  return (
    <MyPageSideMenuContainer>
      <ul>
        <li
          className={path === "my_info" ? "active" : ""}
          onClick={onClickRouting.bind(null, "my_info")}
        >
          내 정보
        </li>
        <li
          className={path === "project_management/recruitment" ? "active" : ""}
          onClick={onClickRouting.bind(null, "project_management/recruitment")}
        >
          프로젝트 관리
        </li>
        <li
          className={path === "user_management/comments" ? "active" : ""}
          onClick={onClickRouting.bind(null, "user_management/comments")}
        >
          유저 관리
        </li>
        <li onClick={() => alert("로그아웃")}>로그아웃</li>
        {/* <li
          className={path === "user_delete" ? "active" : ""}
          onClick={onClickRouting.bind(null, "user_delete")}
        >
          회원 탈퇴
        </li> */}
        {/* <li
          className={path === "user_setting" ? "active" : ""}
          onClick={onClickRouting.bind(null, "user_setting")}
        >
          계정 설정
        </li> */}
      </ul>
      <ul>
        <li
          className={path === "announcement" ? "active" : ""}
          onClick={onClickRouting.bind(null, "announcement")}
        >
          공지사항
        </li>
        <li
          className={path === "about" ? "active" : ""}
          onClick={onClickRouting.bind(null, "about")}
        >
          <img src={IMGLogo} alt="logo" />
          소개
        </li>
      </ul>
    </MyPageSideMenuContainer>
  );
};

const MyPage = () => {
  return (
    <MyPageContainer>
      <CommonCenterWrapper>
        <MyPageTitle>마이페이지</MyPageTitle>
        <MyPageWrapper>
          <MyPageSideMenu />
          <MyPageSection>
            <Routes>
              <Route path="my_info" element={<MyInfo />} />
              <Route
                path="project_management/*"
                element={<ProjectManagement />}
              />
              <Route path="user_management/*" element={<UserManagement />} />
              <Route path="user_delete" element={<UserDelete />} />
              {/* <Route path="user_setting/*" element={<UserSetting />} /> */}
              <Route path="announcement" element={<Announcement />} />
              <Route path="about" element={<About />} />
            </Routes>
          </MyPageSection>
        </MyPageWrapper>
      </CommonCenterWrapper>
    </MyPageContainer>
  );
};

export default MyPage;
