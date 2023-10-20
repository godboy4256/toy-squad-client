import * as React from "react";
import LogoImg from "@/assets/images/common/logo.svg";
import KakaoLogoImg from "@/assets/images/common/kakao_login_icon.svg";
import GoogleLogoImg from "@/assets/images/common/google_login_icon.svg";

import {
  AccountButton,
  AccountContainer,
  EmailLoginTitle,
  GoogleIcon,
  KaKaoIcon,
  LoginButtonGoogle,
  LoginButtonKaKao,
  LoginContainer,
  LoginForm,
  LoginLogo,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import TextField from "@/component/input/TextField/TextField";
import Button from "@/component/input/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LoginLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="login page logo"
      />
      <LoginButtonGoogle>
        <GoogleIcon src={GoogleLogoImg} />
        구글로 로그인하기
      </LoginButtonGoogle>
      <LoginButtonKaKao>
        <KaKaoIcon src={KakaoLogoImg} />
        카카오로 로그인하기
      </LoginButtonKaKao>
      <EmailLoginTitle>
        <span>이메일 로그인</span>
      </EmailLoginTitle>
      <LoginForm>
        <TextField placeholder="이메일을 입력해주세요." />
        <TextField type="password" placeholder="비밀번호를 입력해주세요." />
        <Button onClick={() => {}}>로그인</Button>
      </LoginForm>
      <AccountContainer>
        <AccountButton onClick={() => navigate("/signUp")}>
          회원가입
        </AccountButton>
        <AccountButton>비밀번호 재설정</AccountButton>
        <AccountButton>아이디 찾기</AccountButton>
      </AccountContainer>
    </LoginContainer>
  );
};

export default Login;
