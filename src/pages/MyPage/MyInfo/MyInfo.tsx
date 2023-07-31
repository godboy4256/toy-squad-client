import React from 'react';
import { MyPageSectionTitle } from '../MyPage.style';
import UserProfile from '@/assets/images/common/default_profile.svg';
import {
  MyInfoUserProfile,
  MyInfoName,
  MyInfoPosition,
  MyInfoUserImage,
  MyInfoDefaultInfo,
  MyInfoSetting,
  MyPageMyInfoHeader,
  MyInfoIntro,
  MyInfoEvaluationInfo,
  MyInfoContents,
  MyInfoContent,
  MyInfoTendency,
  MyInfoContact,
} from './MyInfo.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import SkillTagList from '@/component/common/SkillTagList/SkillTagList';

import NodeJsICon from '@/assets/images/skills/nodejs.svg';
import JSICon from '@/assets/images/skills/js.svg';
import TSICon from '@/assets/images/skills/ts.svg';
import ReactICon from '@/assets/images/skills/react.svg';
import CSSICon from '@/assets/images/skills/css.svg';
import HTMLICon from '@/assets/images/skills/html.svg';
import GitICon from '@/assets/images/skills/git.svg';
import GitHubICon from '@/assets/images/skills/github.svg';
import TagList from '@/component/common/TagList/TagList';

const MyInfo = () => {
  return (
    <div>
      <MyPageMyInfoHeader>
        <MyPageSectionTitle>내 정보</MyPageSectionTitle>
        <MyInfoSetting>
          <FontAwesomeIcon icon={faEdit} />
          <div>내 정보 변경</div>
        </MyInfoSetting>
      </MyPageMyInfoHeader>
      <MyInfoUserProfile>
        <MyInfoUserImage src={UserProfile} />
        <div>
          <MyInfoDefaultInfo>
            <MyInfoName>석지웅</MyInfoName>
          </MyInfoDefaultInfo>
          <MyInfoPosition>
            프론트엔드 개발자 <span>(주니어)</span>
          </MyInfoPosition>
          <MyInfoEvaluationInfo>
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>54</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
              <span>5.0</span>
            </div>
          </MyInfoEvaluationInfo>
        </div>
      </MyInfoUserProfile>
      <MyInfoIntro>
        안녕하세요. 1년차 주니어 프론트엔드 개발자 석지웅입니다.
      </MyInfoIntro>
      <MyInfoContents>
        <MyInfoContent>
          <h3>주요 스킬</h3>
          <SkillTagList
            skillList={[
              { name: 'REACT', icon: ReactICon },
              { name: 'JS', icon: JSICon },
              { name: 'TS', icon: TSICon },
              { name: 'HTML', icon: HTMLICon },
              { name: 'CSS', icon: CSSICon },
              { name: 'NODE', icon: NodeJsICon },
              { name: 'GIT', icon: GitICon },
              { name: 'GITHUB', icon: GitHubICon },
            ]}
          />
        </MyInfoContent>
        <MyInfoContent>
          <h3>선호 분야</h3>
          <TagList tagList={['건강/운동', '뷰티/패션', '금융']} color="green" />
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
      </MyInfoContents>
    </div>
  );
};

export default MyInfo;
