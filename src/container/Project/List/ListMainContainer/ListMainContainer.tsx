import ProjectCard from '@/component/common/ProjectCard/ProjectCard';
import { ProjectListMain, ProjectListSelect } from './ListMainContainer.style';
import React from 'react';

export default function ListMainContainer() {
  return (
    <ProjectListMain>
      <ProjectListSelect name="sort" id="sort">
        <option value="newest">최신순</option>
        <option value="view">조회순</option>
      </ProjectListSelect>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => {
        return <ProjectCard key={idx} id={idx} />;
      })}
    </ProjectListMain>
  );
}
