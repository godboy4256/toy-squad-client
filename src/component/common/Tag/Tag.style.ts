import styled, { css } from "styled-components";

export const TagStyle = styled.span<{ type: string }>`
  display: inline-block;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ type, theme }) => {
    if (type === "large") {
      return css`
        height: 52px;
        font-size: ${theme.fontSize.xxl};
        border: 1px solid ${theme.color.lightGrey};
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
        border: 1px solid ${theme.color.black};
        background-color: ${theme.color.black};
        font-size: ${theme.fontSize.s};
        border-radius: 14px;
        color: ${theme.color.white};
        line-height: 28px;
      `;
    }
  }}
`;
