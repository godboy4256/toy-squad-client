import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import React from "react";
import styled from "styled-components";

type TagListPropsType = {
  tagList: string[];
  color?: "green" | "red" | string[];
  fontSize?: string;
  padding?: string;
};

type TagContainerPropsType = {
  bgColor?: "green" | "red" | string[];
  fontSize?: string;
  padding?: string;
};

const TagListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TagContainer = styled.li<TagContainerPropsType>`
  background-color: ${({ theme, bgColor }) =>
    bgColor === "red"
      ? theme.color.red
      : bgColor === "green"
      ? theme.color.green
      : ""};
  color: white;
  padding: ${({ padding }) => (padding ? padding : "10px 15px")};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.m};
  margin-right: 10px;
  border-radius: 10px;
`;

const TagList = ({ tagList, color, fontSize, padding }: TagListPropsType) => {
  return (
    <TagListContainer>
      {tagList.map((tag, idx) => {
        return (
          <TagContainer
            style={{
              backgroundColor: typeof color === "object" ? color[idx] : "",
            }}
            key={ListKeyGenerater(idx, tag)}
            fontSize={fontSize}
            bgColor={color}
            padding={padding}
          >
            {tag}
          </TagContainer>
        );
      })}
    </TagListContainer>
  );
};

export default TagList;
