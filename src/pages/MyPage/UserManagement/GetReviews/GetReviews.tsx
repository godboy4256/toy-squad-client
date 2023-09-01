import ReviewCard from '@/container/MyPage/UserManagement/ReviewCard/ReviewCard';
import React from 'react';
import styled from 'styled-components';

const GetReviewsContainer = styled.section`
  margin-top: 50px;
  min-height: 500px;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const GetReviewsBody = styled.div`
  margin-top: 10px;
`;

const GetReviews = () => {
  return (
    <GetReviewsContainer>
      <h3>받은 리뷰 목록</h3>
      <GetReviewsBody>
        <ReviewCard type="get" />
        <ReviewCard type="get" />
        <ReviewCard type="get" />
        <ReviewCard type="get" />
      </GetReviewsBody>
    </GetReviewsContainer>
  );
};

export default GetReviews;
