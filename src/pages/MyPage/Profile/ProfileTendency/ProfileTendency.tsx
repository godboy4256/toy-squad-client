import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import React from "react";
import styled from "styled-components";
const ProfileTendencyList = styled.ul`
  & > li {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.4;
  }
`;

const ProfileTendency = ({ value }) => {
  return (
    <div>
      <ProfileTendencyList>
        {value?.map((tendency: string, idx: number) => {
          return <li key={ListKeyGenerater(idx, tendency)}>{tendency}</li>;
        })}
      </ProfileTendencyList>
    </div>
  );
};

export default ProfileTendency;
