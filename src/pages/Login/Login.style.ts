import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 336px;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const LoginLogo = styled.img`
  flex: 0;
  width: 130px;
  margin-bottom: 30px;
  cursor: pointer;
`;
export const LoginButtonGoogle = styled.button`
  background-color: white;
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 1.6rem;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 10px;
  border: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginButtonKaKao = styled.button`
  background-color: #fce51e;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 1.6rem;
  color: #3b1d14;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoogleIcon = styled.img`
  width: 19px;
  margin-right: 10px;
`;
export const KaKaoIcon = styled.img`
  width: 23px;
  margin-right: 10px;
`;
export const EmailLoginTitle = styled.p`
  width: 100%;
  position: relative;
  margin: 50px 0;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
  }
  & span {
    display: block;
    background-color: #fff;
    padding: 10px;
    font-size: 1.6rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 1;
  }
`;
export const AccountContainer = styled.div`
  margin: 40px 0;
`;
export const AccountButton = styled.a`
  font-size: ${({ theme }) => theme.fontSize.l};
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 15px;
  &:first-of-type {
    border-left: none;
  }
`;

export const LoginForm = styled.form``;
