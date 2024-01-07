import TextField from "@/component/input/TextField/TextField";
import React from "react";
import {
  FindPwContainer,
  FindPwForm,
  FindPwGuide,
  FindPwTitle,
} from "./FindPw.style";
import Button from "@/component/input/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogoImg from "@/assets/images/common/logo.svg";
import {
  AccountButton,
  AccountContainer,
  LoginLogo,
} from "../Login/Login.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SendToServer } from "@/utils/SendToServer";

type FindPwDataType = {
  email: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "올바른 이메일 형식이 아닙니다."
      ),
  })
  .required();

const FindPw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data: FindPwDataType) => {
    try {
      const postData = {
        inputEmail: data.email,
      };
      SendToServer({
        path: "email/pwd",
        method: "POST",
        data: postData,
        callBack: () => alert("이메일이 전송되었습니다."),
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <FindPwContainer>
      <LoginLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="login page logo"
      />
      <FindPwTitle>비밀번호 찾기</FindPwTitle>
      <FindPwGuide>비밀번호를 찾고 싶은 이메일을 입력해주세요.</FindPwGuide>
      <FindPwForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          params="email"
          register={register}
          marginBottom="10px"
          placeholder="이메일을 입력해주세요."
          errorsMessage={errors?.email?.message}
        />
        <Button>비밀번호 찾기</Button>
      </FindPwForm>
      <AccountContainer>
        <AccountButton onClick={() => navigate("/login")}>로그인</AccountButton>
        <AccountButton onClick={() => navigate("/signUp")}>
          회원가입
        </AccountButton>
      </AccountContainer>
    </FindPwContainer>
  );
};

export default FindPw;
