import ProjectCardManage from '@/container/MyPage/ProjectManage/ProjectCardManage/ProjectCardManage';
import React, { useState } from 'react';
import {
  ProjectDataNone,
  ProjectManageSubTitle,
} from '../ProjectManagement.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import { ProjectDataType } from '../ProjectManagement.type';
import MemberList from '@/container/MyPage/ProjectManage/MemberList/MemberList';
import Modal from '@/component/common/Modal/Modal';

const Complete = ({ projectData }: { projectData: ProjectDataType[] }) => {
  const [isMemberList, setIsMemberList] = useState(false);
  const settingMenu = [
    { menu: '팀원 리뷰', onClickFunc: () => setIsMemberList(true) },
  ];
  return (
    <>
      <ProjectManageSubTitle>완료된 프로젝트</ProjectManageSubTitle>
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
                  settingMenu={settingMenu}
                />
              );
            })}
          </ul>
          <Modal
            content={<MemberList type="COM" />}
            open={isMemberList}
            setOpen={setIsMemberList}
          />
        </>
      ) : (
        <ProjectDataNone>완료된 프로젝트가 없습니다.</ProjectDataNone>
      )}
    </>
  );
};

export default Complete;
