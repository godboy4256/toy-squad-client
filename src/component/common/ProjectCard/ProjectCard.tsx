import * as React from "react";
import {
  ProjectAuthor,
  ProjectAuthorImg,
  ProjectAuthorName,
  ProjectDetail,
  ProjectLabel,
  ProjectPeriod,
  ProjectCardStyle,
  ProjectTags,
  ProjectThumbnail,
  ProjectTitle,
} from "./Project.style";
import UserIcon from "@assets/images/common/user.svg";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: number;
}

const ProjectCard = ({ id }: ProjectCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/projects/detail/${id}`);
  };

  return (
    <ProjectCardStyle onClick={handleCardClick}>
      <ProjectThumbnail>
        <ProjectPeriod>
          <ProjectLabel>D-10</ProjectLabel>
        </ProjectPeriod>
        <ProjectTags>
          <ProjectLabel>건강/운동</ProjectLabel>
          <ProjectLabel>Web</ProjectLabel>
        </ProjectTags>
      </ProjectThumbnail>
      <ProjectTitle>프로젝트 제목</ProjectTitle>
      <ProjectDetail>
        프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한
        소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다.
      </ProjectDetail>
      <ProjectAuthor>
        <ProjectAuthorImg src={UserIcon} alt="#" />
        <ProjectAuthorName>석지웅 팀장</ProjectAuthorName>
      </ProjectAuthor>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
