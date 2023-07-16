import * as React from "react";
import {
  Detail,
  ProjectPeriod,
  ProjectCardStyle,
  ProjectTags,
  ProjectThumbnail,
  ProjectTitle,
} from "./Project.style";
import UserIcon from "@assets/images/common/user.svg";
import { useNavigate } from "react-router-dom";
import { Author } from "../Author/Author";
import { Tag } from "../Tag/Tag";

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
          <Tag>D-10</Tag>
        </ProjectPeriod>
        <ProjectTags>
          <Tag>건강/운동</Tag>
          <Tag>Web</Tag>
        </ProjectTags>
      </ProjectThumbnail>
      <ProjectTitle>프로젝트 제목</ProjectTitle>
      <Detail>
        프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한
        소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다.
      </Detail>
      <Author imgSrc={UserIcon} name={"석지웅"} />
    </ProjectCardStyle>
  );
};

export default ProjectCard;
