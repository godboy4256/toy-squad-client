import * as React from "react";

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
        GetMyInfo(response?.data?.user_id);
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
        src="/assets/images/common/logo.svg"
        alt="login page logo"
      />
      <LoginButtonGoogle>
        <a href={process.env.GOOGLE_LOGIN_URL}>
          <GoogleIcon src="/assets/images/common/google_login_icon.svg" />
          구글로 로그인하기
        </a>
      </LoginButtonGoogle>
      <LoginButtonKaKao>
        <a href={process.env.KAKAO_LOGIN_URL}>
          <KaKaoIcon src="/assets/images/common/kakao_login_icon.svg" />
          카카오로 로그인하기
        </a>
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
