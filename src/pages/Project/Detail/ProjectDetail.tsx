import * as React from "react";
import { ProjectDetailHeader, Tags, Title } from "./PeojectDetail.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import { Author } from "@/component/common/Author/Author";
import UserIcon from "@assets/images/common/user.svg";
import { Tag } from "@/component/common/Tag/Tag";

const ProjectDetail = () => {
  return (
    <CommonCenterWrapper>
      <ProjectDetailHeader>
        <Title>모바일 채팅 앱 만들기 프로젝트</Title>
        <Author imgSrc={UserIcon} name={"석지웅"}></Author>
        <Tags>
          <Tag type="large">서울 / 오프라인</Tag>
          <Tag type="large">웹 개발</Tag>
          <Tag type="large">짧은 기간 프로젝트</Tag>
        </Tags>
      </ProjectDetailHeader>
    </CommonCenterWrapper>
  );
};

export default ProjectDetail;
