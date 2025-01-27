import styled from "styled-components";

export const FindPwContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`;
export const FindPwTitle = styled.h2`
  font-size: 1.8rem;
  margin: 20px 0;
  font-weight: 700;
`;
export const FindPwGuide = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #777;
`;

export const FindPwForm = styled.form`
  width: 100%;
  & > button {
    display: block;
    width: fit-content;
    margin: 20px auto 0;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
