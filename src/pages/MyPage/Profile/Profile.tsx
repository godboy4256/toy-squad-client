import React from "react";
import { MyPageSectionTitle } from "../MyPage.style";
import MyInfoContent from "./ProfileContent/ProfileContent";
import MyInfoIntro from "./ProfileIntro/ProfileIntro";
import ProfileMyInfo from "./ProfileMyInfo/ProfileMyInfo";
import ProfileSkills from "./ProfileSkills/ProfileSkills";
import ProfileMyInfoEdit from "./ProfileMyInfo/ProfileMyInfoEdit";
import ProfileIntroEdit from "./ProfileIntro/ProfileIntroEdit";
import ProfileSkillsEdit from "./ProfileSkills/ProfileSkillsEdit";
import ProfilePreField from "./ProfilePreField/ProfilePreField";
import ProfilePreFieldEdit from "./ProfilePreField/ProfilePreFieldEdit";
import ProfileTendency from "./ProfileTendency/ProfileTendency";
import ProfileTendencyEdit from "./ProfileTendency/ProfileTendencyEdit";
import ProfileContact from "./ProfileContact/ProfileContact";
import ProfileContactEdit from "./ProfileContact/ProfileContactEdit";
import { Button } from "antd";
import { SendToServer } from "@/utils/SendToServer";
import { myUserId } from "@/utils/GetMyInfo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserDeleteButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & button {
    font-size: 1.2rem;
    height: fit-content;
    color: #777;
  }
`;

const Profile = () => {
  const myInfoData = JSON.parse(sessionStorage.getItem("my_info"))?.profile;
  const navigate = useNavigate();
  return (
    <>
      <MyPageSectionTitle>프로필 관리</MyPageSectionTitle>
      <MyInfoContent
        title="내 정보"
        Content={ProfileMyInfo}
        EditField={ProfileMyInfoEdit}
        valueData={{
          name: myInfoData?.name,
          position: myInfoData?.position,
          imgUrl: myInfoData?.imgUrl,
        }}
        autoEditOn={
          myInfoData?.name === "미연동 계정" || !myInfoData?.position
            ? true
            : false
        }
      />
      <MyInfoContent
        title="소개"
        Content={MyInfoIntro}
        EditField={ProfileIntroEdit}
        valueData={myInfoData?.intro}
      />
      <MyInfoContent
        title="주요 스킬"
        Content={ProfileSkills}
        valueData={myInfoData?.skills}
        EditField={ProfileSkillsEdit}
      />

      <MyInfoContent
        title="선호 분야"
        Content={ProfilePreField}
        EditField={ProfilePreFieldEdit}
        valueData={myInfoData?.fields}
      />
      <MyInfoContent
        title="프로젝트 참여 성향"
        Content={ProfileTendency}
        EditField={ProfileTendencyEdit}
        valueData={myInfoData?.tendency}
      />
      <MyInfoContent
        title="휴대전화 / 이메일"
        Content={ProfileContact}
        EditField={ProfileContactEdit}
        valueData={{ email: myInfoData?.email, phone: myInfoData?.phone }}
      />
      <UserDeleteButton>
        <Button
          onClick={() => {
            const isConfirm = confirm(
              "정말 계정을 삭제하시겠습니까? 계정을 삭제하면 복원할 수 없습니다."
            );
            if (isConfirm) {
              SendToServer({
                path: "users",
                method: "DELETE",
                data: {
                  userId: myUserId,
                },
                needAuth: true,
              });
              alert("회원 탈퇴 되었습니다. 이용해주셔서 감사합니다.");
              sessionStorage.setItem("accessToken", "");
              sessionStorage.setItem("refreshToken", "");
              sessionStorage.setItem("user_id", "");
              sessionStorage.setItem("my_info", "");
              navigate("/main");
            }
          }}
        >
          계정 삭제하기
        </Button>
      </UserDeleteButton>
    </>
  );
};

export default Profile;
