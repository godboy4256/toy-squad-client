import SettingMenuButton from '@/component/common/SettingMenuButton/SettingMenuButton';
import MiniProfileCard from '@/component/common/UserInfo/MiniProfileCard';
import React, { useState } from 'react';
import styled from 'styled-components';

const ClickLikesContainer = styled.section`
  margin-top: 50px;
  min-height: 500px;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ClickLikesBody = styled.div`
  margin-top: 10px;
  & > li {
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ClickLikes = () => {
  const settingMenu = [{ menu: '좋아요 취소', onClickFunc: () => {} }];
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <ClickLikesContainer>
      <h3>내가 클릭한 좋아요</h3>
      <ClickLikesBody>
        <li>
          <MiniProfileCard
            name="최은강"
            position="풀스택 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
          <SettingMenuButton
            openMenu={open1}
            setOpenMenu={setOpen1}
            settingMenu={settingMenu}
          />
        </li>
        <li>
          <MiniProfileCard
            name="박지성"
            position="프론트엔드 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
          <SettingMenuButton
            openMenu={open2}
            setOpenMenu={setOpen2}
            settingMenu={settingMenu}
          />
        </li>
        <li>
          <MiniProfileCard
            name="알렉스"
            position="기획자"
            level="시니어"
            rating={5}
            like={50}
          />
          <SettingMenuButton
            openMenu={open3}
            setOpenMenu={setOpen3}
            settingMenu={settingMenu}
          />
        </li>
        <li>
          <MiniProfileCard
            name="김철수"
            position="백엔드 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
          <SettingMenuButton
            openMenu={open4}
            setOpenMenu={setOpen4}
            settingMenu={settingMenu}
          />
        </li>
        <li>
          <MiniProfileCard
            name="정지원"
            position="백엔드 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
          <SettingMenuButton
            openMenu={open5}
            setOpenMenu={setOpen5}
            settingMenu={settingMenu}
          />
        </li>
      </ClickLikesBody>
    </ClickLikesContainer>
  );
};

export default ClickLikes;
