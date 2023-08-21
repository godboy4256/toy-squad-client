import React from 'react';
import styled from 'styled-components';

const SkillTag = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin: 0 6px 6px 0;
  padding: 6px;
  border-radius: 3px;
  background: #f4f4f4;
  font-size: 1.5rem;
  color: #000;
  & > img {
    width: 20px;
    margin-right: 10px;
  }
`;

const SkillTagListContainer = styled.div`
  display: flex;
`;

type SkillType = {
  name:
    | 'JavaScript'
    | 'TypeScript'
    | 'Node JS'
    | 'React JS'
    | 'Git'
    | 'GitHub'
    | 'HTML'
    | 'CSS';
  icon: string;
};

type SkillListType = SkillType[];

const SkillTagList = ({ skillList }: { skillList: SkillListType }) => {
  return (
    <SkillTagListContainer>
      {skillList.map((skill: SkillType) => {
        return (
          <SkillTag>
            <img src={skill.icon} />
            <span>{skill.name}</span>
          </SkillTag>
        );
      })}
    </SkillTagListContainer>
  );
};

export default SkillTagList;
