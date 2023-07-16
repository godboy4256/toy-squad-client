import React from "react";
import { TagStyle } from "./Tag.style";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "large" | "small";
}

export function Tag({ type = "small", ...props }: TagProps) {
  return <TagStyle type={type} {...props}></TagStyle>;
}
