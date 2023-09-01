import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import MiniProfileCard from '@/component/common/UserInfo/MiniProfileCard';
import SettingMenuButton from '@/component/common/SettingMenuButton/SettingMenuButton';

const ReviewCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 15px;
`;
const ReviewCardRating = styled.div`
  padding-top: 10px;
  & svg {
    color: #ffcc00;
  }
`;
const ReviewerProfile = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ReviewTogatherProject = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  & span {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.green};
    margin-right: 5px;
  }
`;

const ProjectThumnail = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  margin-right: 10px;
`;

const ReviewContent = styled.div`
  font-size: 1.5rem;
`;

const ReviewStar = styled.div`
  font-size: 1.5rem;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const ReviewCard = ({ type }: { type: 'write' | 'get' }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const settingMenu = [{ menu: '수정하기', onClickFunc: () => {} }];
  return (
    <ReviewCardContainer>
      <ReviewerProfile>
        <div>
          <MiniProfileCard
            name="김민수"
            position="풀스택 개발자"
            level="주니어"
            rating={5}
            like={50}
          />
          <ReviewTogatherProject>
            <ProjectThumnail></ProjectThumnail>
            <span>당근 마켓 클론코딩</span> 프로젝트를 함께했습니다.
          </ReviewTogatherProject>
        </div>

        {type === 'write' && (
          <SettingMenuButton
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            settingMenu={settingMenu}
          />
        )}
      </ReviewerProfile>
      <ReviewCardRating>
        <ReviewStar>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </ReviewStar>
        <ReviewContent>열심히 참여하십니다.</ReviewContent>
      </ReviewCardRating>
    </ReviewCardContainer>
  );
};

export default ReviewCard;
