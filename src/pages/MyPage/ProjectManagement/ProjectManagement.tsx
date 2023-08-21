import TagList from '@/component/common/TagList/TagList';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { MyPageSectionTitle } from '../MyPage.style';
import {
  ProjectManageTopMenuContainer,
  ProjectManegeContent,
  RecruitContent,
  RecruitDate,
  RecruitHandler,
  RecruitList,
  RecruitThumnail,
  RecruitTitle,
} from './ProjectManagement.style';

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
        <div>0</div>
        <div>모집 현황</div>
      </li>
      <li
        className={path === 'proceeding' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'proceeding')}
      >
        <div>0</div>
        <div>진행중인 프로젝트</div>
      </li>
      <li
        className={path === 'complete' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'complete')}
      >
        <div>0</div>
        <div>완료 프로젝트</div>
      </li>
      <li
        className={path === 'application' ? 'active' : ''}
        onClick={onClickRouting.bind(null, 'application')}
      >
        <div>0</div>
        <div>참여 신청</div>
      </li>
    </ProjectManageTopMenuContainer>
  );
};

const ProjectRecruitMent = () => {
  return (
    <ul>
      <RecruitList>
        <RecruitThumnail></RecruitThumnail>
        <RecruitContent>
          <div>
            <RecruitTitle>당근마켓 클론코딩</RecruitTitle>
            <TagList
              tagList={['건강/운동', 'APP']}
              color="green"
              fontSize="1.1rem"
            />
            <RecruitDate>
              <div>
                <div>모집 기간</div> <span>2023-08-01 ~ 2023-09-01</span>
              </div>
              <div>
                <div>프로젝트 시작일</div> <span>2023-09-03</span>
              </div>
              <div>
                <div>인원 현황</div> <span>1 / 5</span>
              </div>
            </RecruitDate>
          </div>
          <RecruitHandler>
            <span></span>
            <span></span>
            <span></span>
          </RecruitHandler>
        </RecruitContent>
      </RecruitList>
    </ul>
  );
};
const ProjectProceeding = () => {
  return <div>진행중인 프로젝트가 없습니다.</div>;
};

const ProjectComplete = () => {
  return <div>완료한 프로젝트가 없습니다.</div>;
};

const ProjectApplication = () => {
  return <div>참여 신청한 프로젝트가 없습니다.</div>;
};

const ProjectManagement = () => {
  return (
    <div>
      <MyPageSectionTitle>프로젝트 관리</MyPageSectionTitle>
      <ProjectManageTopMenu />
      <ProjectManegeContent>
        <Routes>
          <Route path="recruitment" element={<ProjectRecruitMent />} />
          <Route path="proceeding" element={<ProjectProceeding />} />
          <Route path="complete" element={<ProjectComplete />} />
          <Route path="application" element={<ProjectApplication />} />
        </Routes>
      </ProjectManegeContent>
    </div>
  );
};

export default ProjectManagement;
