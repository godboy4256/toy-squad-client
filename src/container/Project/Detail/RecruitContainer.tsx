import React from 'react';
import {
  RecruitNotice,
  PositionItem,
  PositionList,
  RecruitContainerStyle,
  RecruitSection,
  RecruitTitle,
  RecruitButton,
} from './RecruitContainer.style';
import Hr from '@/component/common/Hr/Hr';
import { Tag } from '@/component/common/Tag/Tag';

export function RecruitContainer() {
  return (
    <RecruitContainerStyle>
      <RecruitSection>
        <RecruitTitle>모집 중인 포지션</RecruitTitle>
        <PositionList>
          <PositionItem>프론트 2명</PositionItem>
          <PositionItem>백엔드 2명</PositionItem>
          <PositionItem>디자인 1명</PositionItem>
        </PositionList>
        <RecruitNotice>
          ⭐️ 모집 포지션 정보가 절대적인 것은 아닙니다. 포지션 이 다르더라도
          목적이 있다면 참여 신청하고 팀장과 대화 해보세요!
        </RecruitNotice>
      </RecruitSection>
      <Hr></Hr>
      <RecruitSection>
        <RecruitTitle>모집 마감일</RecruitTitle>
        <Tag bgColor="red">D-30</Tag>
      </RecruitSection>
      <RecruitSection>
        <RecruitTitle>프로젝트 기간</RecruitTitle>
        <Tag bgColor="red">총 30일 동안 진행</Tag>
      </RecruitSection>
      <RecruitButton>참여 신청</RecruitButton>
    </RecruitContainerStyle>
  );
}
