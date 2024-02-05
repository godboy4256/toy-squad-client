import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { ProfileNoValue } from "../Profile.style";
const ProfileTendencyList = styled.ul`
  & > li {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.4;
    align-items: center;
    display: flex;
    & svg {
      font-size: 1rem;
      margin-right: 10px;
    }
  }
`;

const ProfileTendency = ({ value }) => {
  return (
    <div>
      <ProfileTendencyList>
        {value ? (
          value?.map((tendency: string, idx: number) => {
            return (
              <li key={ListKeyGenerater(idx, tendency)}>
                <FontAwesomeIcon icon={faCircle} />
                <div>{tendency}</div>
              </li>
            );
          })
        ) : (
          <ProfileNoValue>프로젝트 참여 성향이 없습니다.</ProfileNoValue>
        )}
      </ProfileTendencyList>
    </div>
  );
};

export default ProfileTendency;
