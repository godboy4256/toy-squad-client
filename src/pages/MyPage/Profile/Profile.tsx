import React, { useEffect } from "react";
import { MyPageSectionTitle } from "../MyPage.style";
// import { MyInfoContact, MyInfoTendency } from "./Profile.style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import TagList from "@/component/common/TagList/TagList";
import MyInfoContent from "./ProfileContent/ProfileContent";
import MyInfoIntro from "./ProfileIntro/ProfileIntro";
import ProfileMyInfo from "./ProfileMyInfo/ProfileMyInfo";
import ProfileSkills from "./ProfileSkills/ProfileSkills";
// import {
//   EditButtonWrapper,
//   MyIntroEditContainer,
// } from "./ProfileIntro/ProfileIntro.style";
// import TextArea from "antd/es/input/TextArea";
// import ErrorMessage from "@/component/input/ErrorMessage/ErrorMessage";
// import { Button } from "antd";
import ProfileMyInfoEdit from "./ProfileMyInfo/ProfileMyInfoEdit";
// import { SendToServer } from "@/utils/SendToServer";
// import { myUserId } from "@/utils/GetMyInfo";
import ProfileIntroEdit from "./ProfileIntro/ProfileIntroEdit";
import ProfileSkillsEdit from "./ProfileSkills/ProfileSkillsEdit";
import ProfilePreField from "./ProfilePreField/ProfilePreField";
import ProfilePreFieldEdit from "./ProfilePreField/ProfilePreFieldEdit";
import ProfileTendency from "./ProfileTendency/ProfileTendency";
import ProfileTendencyEdit from "./ProfileTendency/ProfileTendencyEdit";

const Profile = () => {
  useEffect(() => {
    return () => {
      // 수정 API 통신 코드
    };
  });
  const myInfoData = JSON.parse(sessionStorage.getItem("my_info"));
  // const handlerChange = () => {
  //   const postData = {
  //     userId: myUserId,
  //   };
  //   SendToServer({
  //     path: `users/${myUserId}`,
  //     method: "PATCH",
  //     data: postData,
  //     needAuth: true,
  //   });
  // };
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
      {/* 
     
      <MyInfoContent
        title="연락처"
        content={
          <MyInfoContact>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <div>{myInfoData?.phone}</div>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>{myInfoData?.email}</div>
            </li>
          </MyInfoContact>
        }
      /> */}
    </>
  );
};

export default Profile;
