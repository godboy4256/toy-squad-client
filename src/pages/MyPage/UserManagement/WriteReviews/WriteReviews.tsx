import ReviewCard from '@/container/MyPage/UserManagement/ReviewCard/ReviewCard';
import React from 'react';
import styled from 'styled-components';

const WriteReviewsContainer = styled.section`
  margin-top: 50px;
  min-height: 500px;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const WriteReviewsBody = styled.div`
  margin-top: 10px;
`;

const WriteReviews = () => {
  return (
    <WriteReviewsContainer>
      <h3>내가 작성한 리뷰</h3>
      <WriteReviewsBody>
        <ReviewCard type="write" />
        <ReviewCard type="write" />
        <ReviewCard type="write" />
        <ReviewCard type="write" />
      </WriteReviewsBody>
    </WriteReviewsContainer>
  );
};

export default WriteReviews;
