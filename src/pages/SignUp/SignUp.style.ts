import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 336px;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 100px;
`;
export const SignUpForm = styled.form`
  width: 100%;
`;
export const SignUpLogo = styled.img`
  width: 130px;
  margin-bottom: 30px;
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
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const SignUpGuide = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  word-break: break-all;
  margin-bottom: 30px;
`;
