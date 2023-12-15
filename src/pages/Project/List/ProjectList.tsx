import * as React from "react";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import ListMainContainer from "@/container/Project/List/ListMainContainer/ListMainContainer";
import { ListHeaderContainer } from "@/container/Project/List/ListHeaderContainer/ListHeaderContainer";

const ProjectList = () => {
  return (
    <CommonCenterWrapper>
      <ListHeaderContainer />
      <ListMainContainer />
    </CommonCenterWrapper>
  );
};

export default ProjectList;
