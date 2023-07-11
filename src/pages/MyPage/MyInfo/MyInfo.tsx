import React from 'react';
import { MyPageSectionTitle } from '../MyPage.style';
import UserProfile from '@/assets/images/common/default_profile.svg';
import {
  MyInfoUserProfile,
  MyInfoName,
  MyInfoPosition,
  MyInfoUserImage,
  MyInfoDefaultInfo,
  MyInfoRatingInfo,
} from './MyInfo.style';

const MyInfo = () => {
  return (
    <div>
      <MyPageSectionTitle>내 정보</MyPageSectionTitle>
      <MyInfoUserProfile>
        <MyInfoUserImage src={UserProfile} />
        <div>
          <MyInfoDefaultInfo>
            <MyInfoName>석지웅</MyInfoName>
            <span> | </span>
            <MyInfoPosition>프론트엔드 개발자</MyInfoPosition>
          </MyInfoDefaultInfo>
          <MyInfoRatingInfo>
            좋아요 수 : 5 평점 : 6 포지션 숙련도 : 7
          </MyInfoRatingInfo>
        </div>
      </MyInfoUserProfile>
    </div>
  );
};

export default MyInfo;
