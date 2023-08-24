import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';

const Proceeding = ({ projectData }: { projectData: ProjectDataType[] }) => {
  const userId = 1;
  // 임시 확인
  return (
    <>
      <ProjectManageSubTitle>진행중인 프로젝트</ProjectManageSubTitle>
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
                settingMenu={
                  userId === project.leader
                    ? ['프로젝트 완료', '프로젝트 종료', '팀원 정보']
                    : ['프로젝트 나가기', '팀원 정보']
                }
              />
            );
          })}
        </ul>
      ) : (
        <ProjectDataNone>진행중인 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default Proceeding;
