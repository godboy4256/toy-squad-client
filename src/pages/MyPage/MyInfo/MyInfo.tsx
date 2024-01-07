import React, { useEffect } from "react";
import { MyPageSectionTitle } from "../MyPage.style";
import {
  MyPageMyInfoHeader,
  MyInfoIntro,
  MyInfoContent,
  MyInfoTendency,
  MyInfoContact,
} from "./MyInfo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
import { SendToServer } from "@/utils/SendToServer";

const MyInfo = () => {
  useEffect(() => {
    SendToServer({
      path: "mypage",
      method: "GET",
      callBackSuccess: (response) => {
        console.log(response);
      },
      needAuth: true,
    });
  }, []);
  return (
    <div>
      <MyPageMyInfoHeader>
        <MyPageSectionTitle>내 정보</MyPageSectionTitle>
        {/* <MyInfoSetting>
          <FontAwesomeIcon icon={faEdit} />
          <div>내 정보 변경</div>
        </MyInfoSetting> */}
      </MyPageMyInfoHeader>
      <MyInfoContent>
        <MiniProfileCard
          name="석지웅"
          position="프론트엔드 개발자"
          level="주니어"
          rating={5}
          like={35}
        />
      </MyInfoContent>
      <MyInfoContent>
        <h3>소개</h3>
        <MyInfoIntro>
          안녕하세요. 1년차 주니어 프론트엔드 개발자 석지웅입니다.
        </MyInfoIntro>
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
        <TagList tagList={["건강/운동", "뷰티/패션", "금융"]} color="green" />
      </MyInfoContent>
      <MyInfoContent>
        <h3>작업 성향</h3>
        <MyInfoTendency>
          <li>• 디테일한 부분을 체크하고 꼼꼼하게 작업해요.</li>
          <li>• 효과적인 커뮤니케이션을 중요하게 생각해요.</li>
          <li>• 문제 해결 능력이 뛰어나고 창의적이에요.</li>
        </MyInfoTendency>
      </MyInfoContent>
      <MyInfoContent>
        <h3>연락처</h3>
        <MyInfoContact>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <div>010-9019-2172</div>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>godboy4256@gmail.com</div>
          </li>
        </MyInfoContact>
      </MyInfoContent>
    </div>
  );
};

export default MyInfo;
