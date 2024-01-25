import React from "react";
import { ProfileNoValue } from "../Profile.style";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import styled from "styled-components";

const ProfileSkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const ProfileSkillsTag = styled.li`
  font-size: 1.4rem;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
  text-transform: capitalize;
`;

const ProfileSkills = ({ value }) => {
  return (
    <>
      {value.length ? (
        <ProfileSkillsContainer>
          {value.map((skill: string, idx: number) => {
            return (
              <ProfileSkillsTag key={ListKeyGenerater(idx, skill)}>
                <img />
                {skill}
              </ProfileSkillsTag>
            );
          })}
        </ProfileSkillsContainer>
      ) : (
        <ProfileNoValue>스킬이 없습니다.</ProfileNoValue>
      )}
    </>
  );
};

export default ProfileSkills;
