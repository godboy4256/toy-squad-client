import { ListKeyGenerater } from "@/utils/ListKeyGenerate";

import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type SettingMenuButtonPropsType = {
  settingMenu: { menu: string; onClickFunc: () => void }[];
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const SettingMenuContainer = styled.ul`
  position: absolute;
  z-index: 2000;
  top: 0;
  right: 0;
  background-color: white;
  padding: 15px 30px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  white-space: nowrap;
  & > li {
    cursor: pointer;
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

export const ProjectCardSetting = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0;
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  & span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const ProjectCardSettingContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const SettingBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const SettingMenu = ({
  menuList,
  onClickOff,
}: {
  menuList: { menu: string; onClickFunc: () => void }[];
  onClickOff: () => void;
}) => {
  return (
    <>
      <SettingBackground onClick={onClickOff}></SettingBackground>
      <SettingMenuContainer>
        {menuList.map(
          (menu: { menu: string; onClickFunc: () => void }, idx: number) => {
            return (
              <li
                onClick={menu.onClickFunc}
                key={ListKeyGenerater(idx, menu.menu)}
              >
                {menu.menu}
              </li>
            );
          }
        )}
      </SettingMenuContainer>
    </>
  );
};

const SettingMenuButton = ({
  settingMenu,
  openMenu,
  setOpenMenu,
}: SettingMenuButtonPropsType) => {
  return (
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
  );
};

export default SettingMenuButton;
