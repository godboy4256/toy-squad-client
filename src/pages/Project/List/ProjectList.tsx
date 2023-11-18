import * as React from "react";
import { ProjectListHr } from "./ProjectList.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
// import ListTagContainer from "@/container/Project/List/ListTagContainer/ListTagContainer";
import ListMainContainer from "@/container/Project/List/ListMainContainer/ListMainContainer";
import { ListHeaderContainer } from "@/container/Project/List/ListHeaderContainer/ListHeaderContainer";

const ProjectList = () => {
  return (
    <CommonCenterWrapper>
      <ListHeaderContainer />
      <ProjectListHr />
      {/* <ListTagContainer /> */}
      <ListMainContainer />
    </CommonCenterWrapper>
  );
};

export default ProjectList;
