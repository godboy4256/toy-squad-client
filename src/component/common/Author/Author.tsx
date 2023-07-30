import React from "react";
import { AuthorImg, AuthorName, AuthorStyle } from "./Author.style";

interface AuthorProps {
  imgSrc: string;
  name: string;
}
export function Author({ imgSrc, name }: AuthorProps) {
  return (
    <AuthorStyle>
      <AuthorImg src={imgSrc}></AuthorImg>
      <AuthorName>{name} 팀장</AuthorName>
    </AuthorStyle>
  );
}
