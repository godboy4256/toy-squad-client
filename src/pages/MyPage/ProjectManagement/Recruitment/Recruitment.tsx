import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';

const RecruitMent = ({ projectData }: { projectData: ProjectDataType[] }) => {
  return (
    <>
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
                settingMenu={[
                  '수정하기',
                  '삭제하기',
                  '마감하기',
                  '프로젝트 시작',
                ]}
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
