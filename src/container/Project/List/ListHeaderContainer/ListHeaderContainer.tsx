import Search from '@/component/input/Search/Search';
import {
  ProjectListFilter,
  ProjectListFilterButton,
  ProjectListHeader,
  ProjectListLine,
  ProjectListSmallCircle,
  ProjectListSpan,
} from './ListHeaderContainer.style';
import React from 'react';

export function ListHeaderContainer() {
  return (
    <ProjectListHeader>
      <Search />
      <ProjectListFilter>
        <ProjectListSpan>필터</ProjectListSpan>
        <ProjectListFilterButton>
          <ProjectListLine>
            <ProjectListSmallCircle style={{ left: '4px' }} />
          </ProjectListLine>
          <ProjectListLine>
            <ProjectListSmallCircle style={{ right: '4px' }} />
          </ProjectListLine>
        </ProjectListFilterButton>
      </ProjectListFilter>
    </ProjectListHeader>
  );
}
