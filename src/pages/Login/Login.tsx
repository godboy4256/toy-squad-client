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
import { Link, useNavigate } from "react-router-dom";
import TextField from "@/component/input/TextField/TextField";
import Button from "@/component/input/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { SendToServer } from "@/utils/SendToServer";
import { GetMyInfo } from "@/utils/GetMyInfo";

const schema = yup
  .object({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "올바른 이메일 형식이 아닙니다."
      ),
    password: yup.string().required("비밀번호를 입력해주세요."),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const postData = {
      email: data.email,
      password: data.password,
    };
    SendToServer({
      path: "sign-in",
      method: "POST",
      data: postData,
      callBackSuccess: (response) => {
        sessionStorage.setItem("accessToken", response?.data?.access_token);
        sessionStorage.setItem("refreshToken", response?.data?.refresh_token);
        sessionStorage.setItem("user_id", response?.data?.user_id);
        GetMyInfo();
        if (sessionStorage.getItem("login_from_path")) {
          navigate(sessionStorage.getItem("login_from_path"));
          sessionStorage.setItem("login_from_path", "");
        } else {
          navigate("/main");
        }
      },
    });
  };

  return (
    <LoginContainer>
      <LoginLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="login page logo"
      />
      <LoginButtonGoogle>
        <Link to="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Foauth%2Fgoogle&scope=email%20profile&client_id=704521567721-t80c231gu4ef450l4mpss9unknrlf8hj.apps.googleusercontent.com&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">
          <GoogleIcon src={GoogleLogoImg} />
          구글로 로그인하기
        </Link>
      </LoginButtonGoogle>
      <LoginButtonKaKao
        onClick={() => {
          SendToServer({
            path: "sign-in/kakao",
            method: "GET",
          });
        }}
      >
        <Link to="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fscope%3Daccount_email%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3001%252Fapi%252Foauth%252Fkakao%26through_account%3Dtrue%26client_id%3D4441ea3e02fbd6fa8472e2ef63d17aeb&talk_login=hidden">
          <KaKaoIcon src={KakaoLogoImg} />
          카카오로 로그인하기
        </Link>
      </LoginButtonKaKao>
      <EmailLoginTitle>
        <span>로그인</span>
      </EmailLoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          params="email"
          register={register}
          marginBottom="10px"
          placeholder="이메일을 입력해주세요."
          errorsMessage={errors?.email?.message}
        />
        <TextField
          params="password"
          register={register}
          marginBottom="50px"
          type="password"
          errorsMessage={errors?.password?.message}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button>로그인</Button>
      </LoginForm>
      <AccountContainer>
        <AccountButton onClick={() => navigate("/signUp")}>
          회원가입
        </AccountButton>
        <AccountButton onClick={() => navigate("/findPw")}>
          비밀번호 찾기
        </AccountButton>
      </AccountContainer>
    </LoginContainer>
  );
};

export default Login;
