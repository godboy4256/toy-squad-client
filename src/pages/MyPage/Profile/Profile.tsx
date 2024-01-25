import React from "react";
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

const Profile = () => {
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
      />
      {/*  />
      <MyInfoContent
        title="선호 분야"
        content={
          myInfoData?.fields?.length ? (
            <TagList tagList={myInfoData?.fields} color="green" />
          ) : (
            "-"
          )
        }
      /> */}
      {/* 
      <MyInfoContent
        title="작업 성향"
        content={
          <MyInfoTendency>
            {myInfoData?.tendency?.map((tendency: string) => {
              return <li>• {tendency}</li>;
            })}
          </MyInfoTendency>
        }
      />
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
