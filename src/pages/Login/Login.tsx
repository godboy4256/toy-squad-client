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
import axios from "axios";

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

  const onClickSocialLogin = async (socail: "G" | "K") => {
    if (socail === "G") {
      await axios.get(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/sign-in/google",
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
    }
    if (socail === "K") {
      await axios.get(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/sign-in/kakao",
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
    }
  };

  const onSubmit = async (data) => {
    try {
      const postData = {
        email: data.email,
        password: data.password,
      };
      const response = await axios.post(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/sign-in",
        postData
      );
      sessionStorage.setItem("accessToken", response?.data?.access_token);
      sessionStorage.setItem("refreshToken", response?.data?.refresh_token);

      if (sessionStorage.getItem("login_from_path")) {
        navigate(sessionStorage.getItem("login_from_path"));
        sessionStorage.setItem("login_from_path", "");
      } else {
        navigate("/main");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <LoginContainer>
      <LoginLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="login page logo"
      />
      <LoginButtonGoogle onClick={() => onClickSocialLogin("G")}>
        <GoogleIcon src={GoogleLogoImg} />
        <Link to="https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/sign-in/google">
          구글로 로그인하기
        </Link>
      </LoginButtonGoogle>
      <LoginButtonKaKao onClick={() => onClickSocialLogin("K")}>
        <KaKaoIcon src={KakaoLogoImg} />
        <Link to="https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/sign-in/kakao">
          카카오로 로그인하기
        </Link>
      </LoginButtonKaKao>
      <EmailLoginTitle>
        <span>이메일 로그인</span>
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
