import React from 'react';
import styled from 'styled-components';

type TagListPropsType = {
  tagList: string[];
  color?: 'green' | 'red' | string[];
};

type TagContainerPropsType = {
  bgColor?: 'green' | 'red' | string[];
};

const TagListContainer = styled.ul`
  display: flex;
`;

const TagContainer = styled.li<TagContainerPropsType>`
  background-color: ${({ theme, bgColor }) =>
    bgColor === 'red'
      ? theme.color.red
      : bgColor === 'green'
      ? theme.color.green
      : ''};
  color: white;
  padding: 10px 15px;
  margin-right: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
`;

const TagList = ({ tagList, color }: TagListPropsType) => {
  return (
    <TagListContainer>
      {tagList.map((tag) => {
        return <TagContainer bgColor={color}>{tag}</TagContainer>;
      })}
    </TagListContainer>
  );
};

export default TagList;
