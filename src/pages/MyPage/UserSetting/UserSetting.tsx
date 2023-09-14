import React from "react";
import { MyPageSectionTitle } from "../MyPage.style";
import Switch from "@/component/input/Switch/Switch";
import { UserSettingDescription, UserSettingMenu } from "./UserSetting.style";

const UserSetting = () => {
  return (
    <div>
      <MyPageSectionTitle>계정 설정</MyPageSectionTitle>
      <UserSettingMenu>
        <li>
          <div>
            <div>알림 받지 않기</div>
            <UserSettingDescription>
              프로젝트 신청, 참여 제안, 추천, 댓글, 답글 등 모든 알림을 받지
              않습니다.
            </UserSettingDescription>
          </div>
          <Switch />
        </li>
        <li>
          <div>
            <div>메일 받지 않기</div>
            <UserSettingDescription>
              프로젝트 신청, 참여 제안, 추천, 댓글, 답글 등 모든 메일을 받지
              않습니다.
            </UserSettingDescription>
          </div>
          <Switch />
        </li>
        <li>
          <div>
            <div>프로필 비공개</div>
            <UserSettingDescription>
              상세 프로필을 공개하지 않습니다. (자신이 신청한 프로젝트
              팀장에게만 프로필 정보가 공개되고,
              <br /> 유저 목록에는 기본 프로필만 나타납니다.)
            </UserSettingDescription>
          </div>
          <Switch />
        </li>
        <li>로그아웃</li>
        <li>회원탈퇴</li>
      </UserSettingMenu>
    </div>
  );
};

export default UserSetting;
