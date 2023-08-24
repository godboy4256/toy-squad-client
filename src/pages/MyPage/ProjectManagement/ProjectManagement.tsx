import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MyPageSectionTitle } from '../MyPage.style';
import {
  ProjectManageTopMenuContainer,
  ProjectManegeContent,
} from './ProjectManagement.style';
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

const ProjectManageTopMenu = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState('recruitment');
  const onClickRouting = (path: string) => {
    setPath(path);
    navigate(path);
  };
  return (
    <ProjectManageTopMenuContainer>
      <li
        className={path === 'recruitment' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'recruitment')}
      >
        <div>{projectDataRecruitMent.length}</div>
        <div>모집 현황</div>
      </li>
      <li
        className={path === 'proceeding' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'proceeding')}
      >
        <div>{projectDataProceeding.length}</div>
        <div>진행중인 프로젝트</div>
      </li>
      <li
        className={path === 'complete' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'complete')}
      >
        <div>{projectDataComplete.length}</div>
        <div>완료 프로젝트</div>
      </li>
      <li
        className={path === 'application' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'application')}
      >
        <div>{projectDataApplication.length}</div>
        <div>참여 신청</div>
      </li>
    </ProjectManageTopMenuContainer>
  );
};

const ProjectManagement = () => {
  return (
    <div>
      <MyPageSectionTitle>프로젝트 관리</MyPageSectionTitle>
      <ProjectManageTopMenu />
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
