import React from 'react';
import { TagStyle, TagStyleProps } from './Tag.style';

interface TagProps
  extends TagStyleProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export function Tag({ type = 'small', bgColor = 'white', ...props }: TagProps) {
  return <TagStyle type={type} bgColor={bgColor} {...props}></TagStyle>;
}
