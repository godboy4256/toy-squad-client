import * as React from "react";
import ProjectCard from "@/component/common/ProjectCard/ProjectCard";
import {
  FilterTag,
  ProjectListFilter,
  ProjectListFilterButton,
  ProjectListHeader,
  ProjectListHr,
  ProjectListLine,
  ProjectListMain,
  ProjectListSelect,
  ProjectListSmallCircle,
  ProjectListSpan,
  ProjectListTags,
} from "./ProjectList.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import Search from "@/component/input/Search/Search";

const ProjectList = () => {
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
        <FilterTag type="large">모두 보기</FilterTag>
        <FilterTag type="large">웹 개발</FilterTag>
        <FilterTag type="large">앱 개발</FilterTag>
        <FilterTag type="large">단 기간 프로젝트</FilterTag>
        <FilterTag type="large">프로젝트 시작 임박</FilterTag>
        <FilterTag type="large">온라인</FilterTag>
        <FilterTag type="large">서울 / 오프라인</FilterTag>
        <FilterTag type="large">3 ~ 4일 프로젝트</FilterTag>
        <FilterTag type="large">여유로운 진행 기간</FilterTag>
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
