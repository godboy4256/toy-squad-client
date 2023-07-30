import * as React from 'react';

import { ProjectDetailCenterWrapper } from './PeojectDetail.style';
import DetailContainer from '@/container/Project/Detail/DetailContainer/DetailContainer';
import RecruitContainer from '@/container/Project/Detail/RecruitContainer/RecruitContainer';

const ProjectDetail = () => {
  return (
    <ProjectDetailCenterWrapper>
      <DetailContainer />
      <RecruitContainer />
    </ProjectDetailCenterWrapper>
  );
};

export default ProjectDetail;
