import React from 'react';
import { FilterTag, ProjectListTags } from './ListTagContainer.style';

export default function ListTagContainer() {
  return (
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
  );
}
