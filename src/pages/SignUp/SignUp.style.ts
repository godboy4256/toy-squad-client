import theme from "@/styles/theme";
import styled from "styled-components";

type SignUpPositionProps = {
  active: boolean;
  error: string;
};

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 336px;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;
export const SignUpForm = styled.form`
  width: 100%;
`;
export const SignUpPositionBox = styled.div`
  & > div {
    display: flex;
    column-gap: 5px;
  }
  & button,
  input {
    margin-bottom: 0;
  }
  margin-bottom: 20px;
`;
export const SignUpLogo = styled.img`
  width: 130px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const EmailAuth = styled.div`
  width: 100%;
  display: flex;
  & input {
    margin-bottom: 0;
    margin-right: 15px;
  }
  & button {
    width: fit-content;
    white-space: nowrap;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const SignUpTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 50px;
  font-weight: 700;
`;

export const SignUpGuide = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  word-break: break-all;
  margin-bottom: 30px;
`;

export const SignUpPosition = styled.div`
  cursor: pointer;
  width: 100%;
  border: 1px solid #ccc;
  /* border: 1px solid
    ${(props: SignUpPositionProps) => (props.active ? "#e0234d" : "#ccc")}; */
  /* color: ${(props: SignUpPositionProps) => props.active && "#e0234d"}; */
  font-size: 1.4rem;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: ${(props: SignUpPositionProps) =>
    props.error ? "0" : "30px"};
  background-color: ${(props: SignUpPositionProps) =>
    props.active ? "#fff" : "#f7f7f7"};
  text-align: center;
  &:hover {
    transition: 0.4s;
    background-color: #ccc;
  }
`;
