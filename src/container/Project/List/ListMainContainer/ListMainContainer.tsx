import ProjectCard from "@/component/common/ProjectCard/ProjectCard";
import {
  PrjectListHeader,
  ProjectListContainer,
  ProjectListMain,
  ProjectListWrapper,
} from "./ListMainContainer.style";
import React from "react";
import FilterBox from "@/component/input/FilterButton/SideFilter";
import CustomSelect from "@/component/input/CustomSelect/CustomSelect";
import Button from "@/component/input/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ListMainContainer() {
  const navigate = useNavigate();
  return (
    <ProjectListMain>
      <FilterBox />
      <ProjectListContainer>
        <PrjectListHeader>
          <Button onClick={() => navigate("new")}>팀 모집하기</Button>
          <CustomSelect
            placeHolder="정렬 방식"
            options={[{ value: "등록일순" }, { value: "가나다순" }]}
          />
        </PrjectListHeader>

        <ProjectListWrapper>
          {Array(100)
            .fill(1)
            .map((val, idx) => {
              return <ProjectCard key={idx} id={idx} />;
            })}
        </ProjectListWrapper>
      </ProjectListContainer>
    </ProjectListMain>
  );
}
