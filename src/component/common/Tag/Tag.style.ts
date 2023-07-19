import styled, { css } from 'styled-components';

export interface TagStyleProps {
  type?: 'large' | 'small';
  bgColor?: 'black' | 'white' | 'green';
}

export const TagStyle = styled.span<TagStyleProps>`
  display: inline-block;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ bgColor, theme }) => {
    if (bgColor === 'black') {
      return css`
        background-color: ${theme.color.black};
        color: ${theme.color.white};
      `;
    } else if (bgColor === 'white') {
      return css`
        background-color: ${theme.color.white};
        border: 1px solid ${theme.color.white};
        color: ${theme.color.black};
      `;
    } else {
      return css`
        background-color: ${theme.color.green};
        color: ${theme.color.white};
      `;
    }
  }}

  ${({ type, theme }) => {
    if (type === 'large') {
      return css`
        height: 52px;
        font-size: ${theme.fontSize.xxl};
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 26px;
        line-height: 52px;
      `;
    } else {
      return css`
        height: 28px;
        max-width: 100px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: ${theme.fontSize.s};
        border-radius: 14px;
        line-height: 28px;
      `;
    }
  }}
`;
