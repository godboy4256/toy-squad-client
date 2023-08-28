import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React, { useState } from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';
import Modal from '@/component/common/Modal/Modal';
import ApplicationList from '@/container/MyPage/ProjectManage/ApplicationList/ApplicationList';

const RecruitMent = ({ projectData }: { projectData: ProjectDataType[] }) => {
  const [isApp, setIsApp] = useState(false);
  const settingMenu = [
    { menu: '수정하기', onClickFunc: () => {} },
    { menu: '삭제하기', onClickFunc: () => {} },
    { menu: '마감하기', onClickFunc: () => {} },
    { menu: '프로젝트 시작', onClickFunc: () => {} },
  ];
  return (
    <>
      <Modal content={<ApplicationList />} open={isApp} setOpen={setIsApp} />
      <ProjectManageSubTitle>팀원 모집 현황</ProjectManageSubTitle>
      {projectData.length ? (
        <ul>
          {projectData.map((project, idx) => {
            return (
              <ProjectCardManage
                key={ListKeyGenerater(idx, project.title)}
                title={project.title}
                field={project.field}
                type={project.type}
                appNum={project.appNum}
                infoList={project.infoList}
                settingMenu={settingMenu}
                openAppList={() => setIsApp(true)}
              />
            );
          })}
        </ul>
      ) : (
        <ProjectDataNone>모집하는 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default RecruitMent;
