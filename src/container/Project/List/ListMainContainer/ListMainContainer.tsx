import ProjectCard from "@/component/common/ProjectCard/ProjectCard";
import {
  ProjectListContainer,
  ProjectListMain,
  ProjectListWrapper,
} from "./ListMainContainer.style";
import React from "react";
import FilterBox from "@/component/input/FilterButton/SideFilter";
import CustomSelect from "@/component/input/CustomSelect/CustomSelect";

export default function ListMainContainer() {
  return (
    <ProjectListMain>
      <FilterBox />
      <ProjectListContainer>
        <CustomSelect
          placeHolder="정렬 방식"
          options={[{ value: "등록일순" }, { value: "가나다순" }]}
        />
        <ProjectListWrapper>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => {
            return <ProjectCard key={idx} id={idx} />;
          })}
        </ProjectListWrapper>
      </ProjectListContainer>
    </ProjectListMain>
  );
}
