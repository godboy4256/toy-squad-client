import React, { Dispatch, SetStateAction } from 'react';
import TextArea from '@/component/input/TextArea/TextArea';
import styled from 'styled-components';
import Button from '@/component/input/Button/Button';
import Rating from '@/component/input/Rating/Rating';

const MemberReviewModalContainer = styled.div`
  width: 500px;
  & textarea {
    height: 200px;
    font-size: 1.3rem;
  }
  & h3 {
    font-size: 1.7rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: 5px;
  }
  & h4 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const MemberReviewButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  & button {
    font-size: 1.4rem;
    width: 200px;
    margin: 0 10px;
  }
  & button:last-child {
    background-color: #777;
  }
`;

type MemberReviewModal = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MemberReviewModal = ({ setOpen }: MemberReviewModal) => {
  return (
    <MemberReviewModalContainer>
      <h3>리뷰 작성</h3>
      <h4>풀스택 개발자 - 석지웅 (팀장)</h4>
      <TextArea placeHolder="리뷰 내용을 작성해주세요." />
      <Rating />
      <MemberReviewButton>
        <Button onClick={() => setOpen(false)}>작성완료</Button>
        <Button onClick={() => setOpen(false)}>취소</Button>
      </MemberReviewButton>
    </MemberReviewModalContainer>
  );
};

export default MemberReviewModal;
