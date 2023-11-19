import React from "react";
import { ExpoCardContainer, ExpoContent, ExpoThumnail } from "./ExpoCard.style";
import TagList from "../TagList/TagList";

const ExpoCard = () => {
  return (
    <ExpoCardContainer>
      <ExpoThumnail></ExpoThumnail>
      <ExpoContent>
        <h3>프로젝트 제목</h3>
        <p>
          프로젝트에 대한 소개 프로젝트에 대한 소개 프로젝트에 대한 소개
          프로젝트에 대한 소개 ......
        </p>
        <TagList color={["black"]} tagList={["뉴스", ""]}></TagList>
      </ExpoContent>
    </ExpoCardContainer>
  );
};

export default ExpoCard;
