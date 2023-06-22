import styled from "styled-components";

export const AccountContainer = styled.header`
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 30%);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 3rem;
  animation: fadeIn 0.4s ease-in-out 0s 1 forwards;
  z-index: 10002;
`;

export const AccountOff = styled.nav`
  width: 1.5rem;
  height: 1.5rem;
  padding-bottom: 3rem;
  cursor: pointer;
  margin-left: auto;
  & > img {
    width: 100%;
  }
`;

export const AccountManagement = styled.div`
  justify-content: space-between;
  padding-top: 1.8rem;
  & #signup_link {
    font-size: 1.3rem;
    align-items: center;
  }
  & #signup_link .link {
    margin-left: 0.5rem;
  }
`;

export const AccountTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  padding: 4rem 0;
`;

export const AccountComment = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  padding: 2rem 0;
`;

export const AccountLogo = styled.img`
  display: block;
  margin: 0 auto;
`;

export const AuthNumContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  & > div {
    width: 70%;
  }
  & .account_input:last-of-type {
    margin-bottom: 0;
  }
  & button {
    width: 25%;
    padding: 1rem;
  }
`;

export const SignUpDone = styled.div`
  & > .account_button {
    margin: 0 1rem;
  }
`;
