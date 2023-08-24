import React, { useState } from 'react';

import TagList from '@/component/common/TagList/TagList';
import SettingMenu from '@/component/common/SettingMenu/SettingMenu';
import {
  ProjectCardManageApplication,
  ProjectCardManageContent,
  ProjectCardManageDate,
  ProjectCardManageStyle,
  ProjectCardManageThumnail,
  ProjectCardManageTitle,
  ProjectCardSetting,
  ProjectCardSettingContainer,
} from './ProjectCardManage.style';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';

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
  settingMenu: string[];
};

const ProjectCardManage = ({
  title,
  field,
  type,
  appNum,
  infoList,
  settingMenu,
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
          <ProjectCardManageApplication>
            참여 신청 : {appNum}건
          </ProjectCardManageApplication>
        ) : (
          <></>
        )}
        <ProjectCardSettingContainer>
          <ProjectCardSetting onClick={() => setOpenMenu(true)}>
            <span></span>
            <span></span>
            <span></span>
          </ProjectCardSetting>
          {openMenu && (
            <SettingMenu
              menuList={settingMenu}
              onClickOff={() => setOpenMenu(false)}
            />
          )}
        </ProjectCardSettingContainer>
      </ProjectCardManageContent>
    </ProjectCardManageStyle>
  );
};

export default ProjectCardManage;
