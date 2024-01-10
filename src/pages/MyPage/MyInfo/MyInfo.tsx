import React from "react";
import { MyPageSectionTitle } from "../MyPage.style";
import {
  MyPageMyInfoHeader,
  MyInfoIntro,
  MyInfoContent,
  MyInfoTendency,
  MyInfoContact,
  MyInfoSetting,
} from "./MyInfo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEdit, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import SkillTagList from "@/component/common/SkillTagList/SkillTagList";

import NodeJsICon from "@/assets/images/skills/nodejs.svg";
import JSICon from "@/assets/images/skills/js.svg";
import TSICon from "@/assets/images/skills/ts.svg";
import ReactICon from "@/assets/images/skills/react.svg";
import CSSICon from "@/assets/images/skills/css.svg";
import HTMLICon from "@/assets/images/skills/html.svg";
import GitICon from "@/assets/images/skills/git.svg";
import GitHubICon from "@/assets/images/skills/github.svg";
import TagList from "@/component/common/TagList/TagList";
import MiniProfileCard from "@/component/common/UserInfo/MiniProfileCard";
import { myUserId } from "@/utils/GetMyInfo";
import { SendToServer } from "@/utils/SendToServer";

const MyInfo = () => {
  const myInfoData = JSON.parse(sessionStorage.getItem("my_info"));
  const EdifInfo = () => {
    const postData = {
      userId: myUserId,
      skills: ["React", "NODE"],
    };
    SendToServer({
      path: `users/${myUserId}`,
      method: "PATCH",
      data: postData,
      needAuth: true,
    });
  };

  return (
    <div>
      <MyPageMyInfoHeader>
        <MyPageSectionTitle>내 정보</MyPageSectionTitle>
        <MyInfoSetting>
          <FontAwesomeIcon icon={faEdit} />
          <div onClick={EdifInfo}>내 정보 변경</div>
        </MyInfoSetting>
      </MyPageMyInfoHeader>
      <MyInfoContent>
        <MiniProfileCard
          name={myInfoData?.name}
          position={myInfoData?.position}
          level="주니어"
          rating={5}
          like={!myInfoData?.like && 0}
        />
      </MyInfoContent>
      <MyInfoContent>
        <h3>소개</h3>
        <MyInfoIntro>{myInfoData?.intro || "-"}</MyInfoIntro>
      </MyInfoContent>
      <MyInfoContent>
        <h3>주요 스킬</h3>
        <SkillTagList
          skillList={[
            { name: "JavaScript", icon: ReactICon },
            { name: "TypeScript", icon: JSICon },
            { name: "Node JS", icon: TSICon },
            { name: "React JS", icon: HTMLICon },
            { name: "Git", icon: CSSICon },
            { name: "GitHub", icon: NodeJsICon },
            { name: "HTML", icon: GitICon },
            { name: "CSS", icon: GitHubICon },
          ]}
        />
      </MyInfoContent>
      <MyInfoContent>
        <h3>선호 분야</h3>
        {myInfoData?.fields?.length ? (
          <TagList tagList={myInfoData?.fields} color="green" />
        ) : (
          "-"
        )}
      </MyInfoContent>
      <MyInfoContent>
        <h3>작업 성향</h3>
        {myInfoData?.tendency?.length ? (
          <MyInfoTendency>
            {myInfoData?.tendency?.map((tendency: string) => {
              return <li>• {tendency}</li>;
            })}
          </MyInfoTendency>
        ) : (
          "-"
        )}
      </MyInfoContent>

      <MyInfoContent>
        <h3>연락처</h3>
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
      </MyInfoContent>
    </div>
  );
};

export default MyInfo;
