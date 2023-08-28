import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React, { useState } from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';
import Modal from '@/component/common/Modal/Modal';
import MemberList from '@/container/MyPage/ProjectManage/MemberList/MemberList';

const Proceeding = ({ projectData }: { projectData: ProjectDataType[] }) => {
  const userId = 1;
  const [isMemberList, setIsMemberList] = useState(false);
  // 임시 확인
  const settingMenu = [
    { menu: '프로젝트 나가기', onClickFunc: () => {} },
    { menu: '팀원 정보', onClickFunc: () => setIsMemberList(true) },
  ];
  const settingMenuLeader = [
    { menu: '프로젝트 완료', onClickFunc: () => {} },
    { menu: '프로젝트 종료', onClickFunc: () => {} },
    { menu: '팀원 정보', onClickFunc: () => setIsMemberList(true) },
  ];
  return (
    <>
      <ProjectManageSubTitle>진행중인 프로젝트</ProjectManageSubTitle>
      {projectData.length ? (
        <>
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
                    userId === project.leader ? settingMenuLeader : settingMenu
                  }
                />
              );
            })}
          </ul>
          <Modal
            content={<MemberList />}
            open={isMemberList}
            setOpen={setIsMemberList}
          />
        </>
      ) : (
        <ProjectDataNone>진행중인 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default Proceeding;
