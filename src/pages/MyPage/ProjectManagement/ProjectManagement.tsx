import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyPageSectionTitle } from '../MyPage.style';
import { ProjectManegeContent } from './ProjectManagement.style';
import RecruitMent from './Recruitment/Recruitment';
import Proceeding from './Proceeding/Proceeding';
import Complete from './Complete/Complete';
import Application from './Application/Application';
import {
  projectDataApplication,
  projectDataComplete,
  projectDataProceeding,
  projectDataRecruitMent,
} from '@/assets/data/temp';
import MyPageManageTopMenu from '@/container/MyPage/ManageTopMenu/ManageTopMenu';

const ProjectManagement = () => {
  const menuList = [
    {
      title: '모집 현황',
      path: 'recruitment',
      length: projectDataRecruitMent.length,
    },
    {
      title: '진행중인 프로젝트',
      path: 'proceeding',
      length: projectDataProceeding.length,
    },
    {
      title: '완료 프로젝트',
      path: 'complete',
      length: projectDataComplete.length,
    },
    {
      title: '참여 신청',
      path: 'application',
      length: projectDataApplication.length,
    },
  ];
  return (
    <div>
      <MyPageSectionTitle>프로젝트 관리</MyPageSectionTitle>
      <MyPageManageTopMenu menuList={menuList} />
      <ProjectManegeContent>
        <Routes>
          <Route
            path="recruitment"
            element={<RecruitMent projectData={projectDataRecruitMent} />}
          />
          <Route
            path="proceeding"
            element={<Proceeding projectData={projectDataProceeding} />}
          />
          <Route
            path="complete"
            element={<Complete projectData={projectDataComplete} />}
          />
          <Route
            path="application"
            element={<Application projectData={projectDataApplication} />}
          />
        </Routes>
      </ProjectManegeContent>
    </div>
  );
};

export default ProjectManagement;
