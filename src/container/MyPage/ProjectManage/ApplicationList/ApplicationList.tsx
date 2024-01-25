import React from "react";
import {
  ApplicationListBody,
  ApplicationListContainer,
  ApplicationListTitle,
} from "./ApplicationList.style";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import { projectApplicationUser } from "@/data/temp";

const ApplicationList = () => {
  return (
    <ApplicationListContainer>
      <ApplicationListTitle>
        2명의 유저가 참여 신청했습니다.
      </ApplicationListTitle>
      <ApplicationListBody>
        {projectApplicationUser.map((user, idx) => {
          return (
            <ApplicationCard
              key={ListKeyGenerater(idx, user.name)}
              name={user.name}
              position={user.postion}
              appPosition={user.appPosition}
              rating={user.rating}
              like={user.like}
            />
          );
        })}
      </ApplicationListBody>
    </ApplicationListContainer>
  );
};

export default ApplicationList;
