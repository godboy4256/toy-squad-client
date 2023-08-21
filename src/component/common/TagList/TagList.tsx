import React from 'react';
import styled from 'styled-components';

type TagListPropsType = {
  tagList: string[];
  color?: 'green' | 'red' | string[];
  fontSize?: string;
};

type TagContainerPropsType = {
  bgColor?: 'green' | 'red' | string[];
  fontSize?: string;
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
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.m};
  margin-right: 10px;
  border-radius: 10px;
`;

const TagList = ({ tagList, color, fontSize }: TagListPropsType) => {
  return (
    <TagListContainer>
      {tagList.map((tag) => {
        return (
          <TagContainer fontSize={fontSize} bgColor={color}>
            {tag}
          </TagContainer>
        );
      })}
    </TagListContainer>
  );
};

export default TagList;
