import MiniProfileCard from '@/component/common/UserInfo/MiniProfileCard';
import React from 'react';
import styled from 'styled-components';

const GetLikesContainer = styled.section`
  margin-top: 50px;
  min-height: 500px;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const GetLikesBody = styled.div`
  margin-top: 10px;
  & > li {
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
`;

const GetLikes = () => {
  return (
    <GetLikesContainer>
      <h3>내가 받은 좋아요</h3>
      <GetLikesBody>
        <li>
          <MiniProfileCard
            name="최은강"
            position="풀스택 개발자"
            level="주니어"
            rating={5}
            like={50}
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
        </li>
        <li>
          <MiniProfileCard
            name="알렉스"
            position="기획자"
            level="시니어"
            rating={5}
            like={50}
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
        </li>
        <li>
          <MiniProfileCard
            name="정지원"
            position="백엔드 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
        </li>
        <li>
          <MiniProfileCard
            name="최은강"
            position="풀스택 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
        </li>
      </GetLikesBody>
    </GetLikesContainer>
  );
};

export default GetLikes;
