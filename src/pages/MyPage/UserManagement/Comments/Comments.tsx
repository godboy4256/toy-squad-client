import CommentCard from '@/container/MyPage/UserManagement/CommentsCard/CommentCard';
import React from 'react';
import styled from 'styled-components';

const CommentsContainer = styled.section`
  margin-top: 50px;
  min-height: 500px;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const CommentsBody = styled.div`
  margin-top: 10px;
`;

const Comments = () => {
  return (
    <CommentsContainer>
      <h3>댓글/답글 관리</h3>
      <CommentsBody>
        <CommentCard type="comment" />
        <CommentCard type="answer" />
        <CommentCard type="answer" />
        <CommentCard type="comment" />
      </CommentsBody>
    </CommentsContainer>
  );
};

export default Comments;
