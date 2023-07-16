import * as React from "react";
import ProjectCard from "@/component/common/ProjectCard/ProjectCard";
import {
  ProjectListFilter,
  ProjectListFilterButton,
  ProjectListHeader,
  ProjectListHr,
  ProjectListLine,
  ProjectListMain,
  ProjectListSelect,
  ProjectListSmallCircle,
  ProjectListSpan,
  ProjectListTag,
  ProjectListTags,
} from "./ProjectList.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import { useMediaQuery } from "react-responsive";
import Search from "@/component/input/Search/Search";

const ProjectList = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <CommonCenterWrapper>
      <ProjectListHeader>
        <Search />
        <ProjectListFilter>
          <ProjectListSpan>필터</ProjectListSpan>
          <ProjectListFilterButton>
            <ProjectListLine>
              <ProjectListSmallCircle style={{ left: "4px" }} />
            </ProjectListLine>
            <ProjectListLine>
              <ProjectListSmallCircle style={{ right: "4px" }} />
            </ProjectListLine>
          </ProjectListFilterButton>
        </ProjectListFilter>
      </ProjectListHeader>
      <ProjectListHr />

      <ProjectListTags>
        <ProjectListTag>모두 보기</ProjectListTag>
        <ProjectListTag>웹 개발</ProjectListTag>
        <ProjectListTag>앱 개발</ProjectListTag>
        <ProjectListTag>단 기간 프로젝트</ProjectListTag>
        <ProjectListTag>프로젝트 시작 임박</ProjectListTag>
        <ProjectListTag>온라인</ProjectListTag>
        <ProjectListTag>서울 / 오프라인</ProjectListTag>
        <ProjectListTag>3 ~ 4일 프로젝트</ProjectListTag>
        <ProjectListTag>여유로운 진행 기간</ProjectListTag>
      </ProjectListTags>

      <ProjectListMain>
        <ProjectListSelect name="sort" id="sort">
          <option value="newest">최신순</option>
          <option value="view">조회순</option>
        </ProjectListSelect>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => {
          return <ProjectCard key={idx} id={idx} />;
        })}
      </ProjectListMain>
    </CommonCenterWrapper>
  );
};

export default ProjectList;
