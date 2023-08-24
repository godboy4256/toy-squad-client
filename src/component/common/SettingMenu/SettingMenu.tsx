import { ListKeyGenerater } from '@/utils/ListKeyGenerate';

import React, { MouseEvent } from 'react';
import styled from 'styled-components';

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
  menuList: string[];
  onClickOff: () => void;
}) => {
  return (
    <>
      <SettingBackground onClick={onClickOff}></SettingBackground>
      <SettingMenuContainer>
        {menuList.map((menu: string, idx: number) => {
          return <li key={ListKeyGenerater(idx, menu)}>{menu}</li>;
        })}
      </SettingMenuContainer>
    </>
  );
};

export default SettingMenu;
