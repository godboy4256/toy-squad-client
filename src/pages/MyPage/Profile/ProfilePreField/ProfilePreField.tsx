import React from "react";
import { ProfileNoValue } from "../Profile.style";
import TagList from "@/component/common/TagList/TagList";
import styled from "styled-components";

const ProfilePreFieldContainer = styled.div`
  width: 100%;
`;

const ProfilePreField = ({ value }) => {
  return (
    <ProfilePreFieldContainer>
      {value?.length > 0 ? (
        <TagList tagList={value} color="red" />
      ) : (
        <ProfileNoValue>선호 분야가 없습니다.</ProfileNoValue>
      )}
    </ProfilePreFieldContainer>
  );
};

export default ProfilePreField;
