import React from "react";
import { IntroStyle, MyIntroContainer } from "./ProfileIntro.style";
import { ProfileNoValue } from "../Profile.style";

const ProfileIntro = ({ value }) => {
  return (
    <MyIntroContainer>
      {value ? (
        <IntroStyle>{value}</IntroStyle>
      ) : (
        <ProfileNoValue>소개가 없습니다.</ProfileNoValue>
      )}
    </MyIntroContainer>
  );
};

export default ProfileIntro;
