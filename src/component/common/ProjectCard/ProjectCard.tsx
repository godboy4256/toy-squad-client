import {
  Author,
  AuthorImg,
  AuthorName,
  Detail,
  Label,
  Period,
  ProjectCardStyle,
  Tags,
  Thumbnail,
  Title,
} from './Project.style';
import UserIcon from '@assets/images/common/user.svg';

const ProjectCard = () => {
  return (
    <ProjectCardStyle>
      <Thumbnail>
        <Period>
          <Label>D-10</Label>
        </Period>
        <Tags>
          <Label>건강/운동</Label>
          <Label>Web</Label>
        </Tags>
      </Thumbnail>
      <Title>프로젝트 제목</Title>
      <Detail>
        프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한
        소개입니다. 프로젝트에 대한 소개입니다. 프로젝트에 대한 소개입니다.
      </Detail>
      <Author>
        <AuthorImg src={UserIcon} alt="#" />
        <AuthorName>석지웅 팀장</AuthorName>
      </Author>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
