import React, { useState } from 'react';
import styled from 'styled-components';

import SettingMenuButton from '@/component/common/SettingMenuButton/SettingMenuButton';

const CommentCardContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentContent = styled.div`
  font-size: 1.6rem;
  margin-bottom: 5px;
`;

const CommentProjectInfo = styled.div`
  font-size: 1.3rem;
  margin-bottom: 10px;
  & span {
    font-weight: 700;
    &:first-of-type {
      cursor: pointer;
      font-weight: normal;
      text-decoration: underline;
      color: ${({ theme }) => theme.color.green};
    }
  }
`;

const CommentDate = styled.div`
  color: #777;
  font-size: 1.2rem;
`;

const AnswerTargetComment = styled.div`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const CommentCard = ({ type }: { type: 'answer' | 'comment' }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const settingMenu = [
    { menu: '수정하기', onClickFunc: () => {} },
    { menu: '삭제하기', onClickFunc: () => {} },
  ];
  return (
    <CommentCardContainer>
      <div>
        <CommentContent>안녕하세요.</CommentContent>
        {type === 'comment' ? (
          <CommentProjectInfo>
            <span>사이드 프로젝트</span> 모집글에 남긴 댓글입니다.
          </CommentProjectInfo>
        ) : (
          <>
            <CommentProjectInfo>
              <span>사이드 프로젝트</span> 모집글의 <span>김철수 </span>님의
              댓글에 남긴 답글입니다.
            </CommentProjectInfo>
            <AnswerTargetComment>댓글 내용 : 감사합니다.</AnswerTargetComment>
          </>
        )}

        <CommentDate>1일 전</CommentDate>
      </div>
      <SettingMenuButton
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        settingMenu={settingMenu}
      />
    </CommentCardContainer>
  );
};

export default CommentCard;
