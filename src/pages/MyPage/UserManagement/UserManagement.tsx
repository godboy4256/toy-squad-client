import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from './Comments/Comments';
import { MyPageSectionTitle } from '../MyPage.style';
import MyPageManageTopMenu from '@/container/MyPage/ManageTopMenu/ManageTopMenu';

const UserManagement = () => {
  const menuList = [
    {
      title: '댓글/답글 관리',
      path: 'comments',
      length: 0,
    },
    {
      title: '좋아요 관리',
      path: 'likes',
      length: 0,
    },
    {
      title: '리뷰 관리',
      path: 'reviews',
      length: 0,
    },
  ];
  return (
    <div>
      <MyPageSectionTitle>유저 관리</MyPageSectionTitle>
      <MyPageManageTopMenu menuList={menuList} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default UserManagement;
