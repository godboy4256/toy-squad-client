import { projectMemberList } from '@/assets/data/temp';
import MiniProfileCard from '@/component/common/UserInfo/MiniProfileCard';
import React from 'react';
import {
  LeaderMark,
  MemberContainer,
  MemberListBody,
  MemberListContainer,
  MemberListTitle,
  MemberSetting,
} from './MemberList.style';
import Button from '@/component/input/Button/Button';
import { ListKeyGenerater } from '@/utils/ListKeyGenerate';

const MemberList = () => {
  const projectLeader = 1;
  return (
    <MemberListContainer>
      <MemberListTitle>4명의 팀원이 참여중입니다.</MemberListTitle>
      <MemberListBody>
        {projectMemberList.map((member, idx) => {
          return (
            <MemberContainer key={ListKeyGenerater(idx, member.name)}>
              <MiniProfileCard
                name={member.name}
                level={member.level}
                appPosition={member.appPosition}
                rating={member.rating}
                like={member.like}
                profile={member.profile}
                position={member.postion}
              />

              {projectLeader !== member.id ? (
                <MemberSetting>
                  <Button>팀장 임명</Button>
                  <Button>방출하기</Button>
                </MemberSetting>
              ) : (
                <LeaderMark>L</LeaderMark>
              )}
            </MemberContainer>
          );
        })}
      </MemberListBody>
    </MemberListContainer>
  );
};

export default MemberList;
