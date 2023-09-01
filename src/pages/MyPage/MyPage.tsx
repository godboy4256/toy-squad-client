import * as React from 'react';
import { useState } from 'react';
import { CommonCenterWrapper } from '@/styles/CommonStyles';
import { Route, Routes, useNavigate } from 'react-router-dom';
import IMGLogo from '@/assets/images/common/logo.svg';
import MyInfo from './MyInfo/MyInfo';
import ProjectManagement from './ProjectManagement/ProjectManagement';
import UserManagement from './UserManagement/UserManagement';
import UserSetting from './UserSetting/UserSetting';
import Announcement from './Announcement/Announcement';
import About from './About/About';
import { useEffect } from 'react';
import {
  MyPageContainer,
  MyPageSection,
  MyPageSideMenuContainer,
  MyPageTitle,
  MyPageWrapper,
} from './MyPage.style';

const MyPageSideMenu = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState('my_info');
  const onClickRouting = (path: string) => {
    setPath(path);
    navigate(path);
  };
  useEffect(() => {
    if (location.pathname === '/mypage') {
      navigate('/mypage/my_info');
    }
  }, []);
  return (
    <MyPageSideMenuContainer>
      <ul>
        <li
          className={path === 'my_info' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'my_info')}
        >
          내 정보
        </li>
        <li
          className={path === 'project_management/recruitment' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'project_management/recruitment')}
        >
          프로젝트 관리
        </li>
        <li
          className={path === 'user_management/comments' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'user_management/comments')}
        >
          유저 관리
        </li>
        <li
          className={path === 'account_setting' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'account_setting')}
        >
          계정 설정
        </li>
      </ul>
      <ul>
        <li
          className={path === 'toysquad_announcement' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'toysquad_announcement')}
        >
          공지사항
        </li>
        <li
          className={path === 'toysquad_introduction' ? 'active' : ''}
          onClick={onClickRouting.bind(null, 'toysquad_introduction')}
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
