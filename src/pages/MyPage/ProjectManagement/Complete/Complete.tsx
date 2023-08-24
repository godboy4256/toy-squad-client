import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';

const Complete = ({ projectData }: { projectData: ProjectDataType[] }) => {
  return (
    <>
      <ProjectManageSubTitle>완료된 프로젝트</ProjectManageSubTitle>
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
                settingMenu={['팀원 정보']}
              />
            );
          })}
        </ul>
      ) : (
        <ProjectDataNone>완료된 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default Complete;
