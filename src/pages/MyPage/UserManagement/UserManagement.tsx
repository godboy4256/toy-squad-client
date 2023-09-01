import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from './Comments/Comments';
import { MyPageSectionTitle } from '../MyPage.style';
import MyPageManageTopMenu from '@/container/MyPage/ManageTopMenu/ManageTopMenu';
import GetLikes from './GetLikes/GetLikes';
import ClickLikes from './ClickLikes/ClickLikes';
import GetReviews from './GetReviews/GetReviews';
import WriteReviews from './WriteReviews/WriteReviews';

const UserManagement = () => {
  const menuList = [
    {
      title: '댓글/답글 관리',
      path: 'comments',
      length: 0,
    },
    {
      title: '받은 좋아요',
      path: 'get_likes',
      length: 0,
    },
    {
      title: '누른 좋아요',
      path: 'clike_likes',
      length: 0,
    },
    {
      title: '받은 리뷰',
      path: 'get_reviews',
      length: 0,
    },
    {
      title: '작성한 리뷰',
      path: 'write_reviews',
      length: 0,
    },
  ];
  return (
    <div>
      <MyPageSectionTitle>유저 관리</MyPageSectionTitle>
      <MyPageManageTopMenu menuList={menuList} />
      <Routes>
        <Route path="comments" element={<Comments />} />
        <Route path="get_likes" element={<GetLikes />} />
        <Route path="clike_likes" element={<ClickLikes />} />
        <Route path="get_reviews" element={<GetReviews />} />
        <Route path="write_reviews" element={<WriteReviews />} />
      </Routes>
    </div>
  );
};

export default UserManagement;
