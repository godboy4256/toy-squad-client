import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';

const Application = ({ projectData }: { projectData: ProjectDataType[] }) => {
  return (
    <>
      <ProjectManageSubTitle>참여 신청 현황</ProjectManageSubTitle>
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
                settingMenu={['신청 취소', '글 수정']}
              />
            );
          })}
        </ul>
      ) : (
        <ProjectDataNone>참여 신청한 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default Application;
