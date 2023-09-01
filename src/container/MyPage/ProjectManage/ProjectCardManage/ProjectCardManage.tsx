import React, { useState } from 'react';

import TagList from '@/component/common/TagList/TagList';
import {
  ProjectCardManageApplication,
  ProjectCardManageContent,
  ProjectCardManageDate,
  ProjectCardManageStyle,
  ProjectCardManageThumnail,
  ProjectCardManageTitle,
} from './ProjectCardManage.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';
import SettingMenuButton from '@/component/common/SettingMenuButton/SettingMenuButton';

type ProjectCardManagePropsType = {
  title: string;
  field: string;
  type: string;
  appNum?: number;
  appResult?: boolean;
  infoList: {
    infoKey: string;
    infoValue: string;
  }[];
  settingMenu: { menu: string; onClickFunc: () => void }[];
  openAppList?: () => void;
};

const ProjectCardManage = ({
  title,
  field,
  type,
  appNum,
  infoList,
  settingMenu,
  openAppList,
}: ProjectCardManagePropsType) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ProjectCardManageStyle>
      <ProjectCardManageThumnail />
      <ProjectCardManageContent>
        <div>
          <ProjectCardManageTitle>{title}</ProjectCardManageTitle>
          <TagList
            tagList={[field, type]}
            color={['#00DD6D', '#777']}
            fontSize="1.2rem"
            padding="8px 10px"
          />
          <ProjectCardManageDate>
            {infoList.map((info, idx) => {
              return (
                <div key={ListKeyGenerater(idx, info.infoKey)}>
                  <div>{info.infoKey}</div> <span>{info.infoValue}</span>
                </div>
              );
            })}
          </ProjectCardManageDate>
        </div>
        {appNum ? (
          <ProjectCardManageApplication onClick={openAppList}>
            참여 신청 : {appNum}건
          </ProjectCardManageApplication>
        ) : (
          <></>
        )}
        <SettingMenuButton
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          settingMenu={settingMenu}
        />
      </ProjectCardManageContent>
    </ProjectCardManageStyle>
  );
};

export default ProjectCardManage;
