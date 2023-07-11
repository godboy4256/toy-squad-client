import * as React from 'react';
import { CommonCenterWrapper } from '@/styles/CommonStyles';
import { Route, Routes, useNavigate } from 'react-router-dom';
import IMGLogo from '@/assets/images/common/logo.svg';
import MyInfo from './MyInfo/MyInfo';
import ProjectManagement from './ProjectManagement/ProjectManagement';
import UserManagement from './UserManagement/UserManagement';
import UserSetting from './UserSetting/UserSetting';
import Announcement from './Announcement/Announcement';
import About from './About/About';
import {
  MyPageContainer,
  MyPageSection,
  MyPageSideMenu,
  MyPageTitle,
  MyPageWrapper,
} from './MyPage.style';

const MyPage = () => {
  const navigate = useNavigate();
  const onClickRouting = (path: string) => {
    navigate(path);
  };
  return (
    <MyPageContainer>
      <CommonCenterWrapper>
        <MyPageTitle>My 토이스쿼드</MyPageTitle>
        <MyPageWrapper>
          <MyPageSideMenu>
            <ul>
              <li onClick={onClickRouting.bind(null, 'my_info')}>내 정보</li>
              <li onClick={onClickRouting.bind(null, 'project_management')}>
                프로젝트 관리
              </li>
              <li onClick={onClickRouting.bind(null, 'user_management')}>
                유저 관리
              </li>
              <li onClick={onClickRouting.bind(null, 'account_setting')}>
                계정 설정
              </li>
            </ul>
            <ul>
              <li onClick={onClickRouting.bind(null, 'toysquad_announcement')}>
                공지사항
              </li>
              <li onClick={onClickRouting.bind(null, 'toysquad_introduction')}>
                <img src={IMGLogo} alt="logo" />
                소개
              </li>
            </ul>
          </MyPageSideMenu>
          <MyPageSection>
            <Routes>
              <Route path="my_info" element={<MyInfo />} />
              <Route
                path="project_management"
                element={<ProjectManagement />}
              />
              <Route path="user_management" element={<UserManagement />} />
              <Route path="user_setting" element={<UserSetting />} />
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
