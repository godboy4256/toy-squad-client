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
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
      await axios.post(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/email/pwd",
        postData
      );
    } catch (error) {
      alert(error.response.data.message);
    }
    alert("이메일이 전송되었습니다.");
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
          placeholder="비밀번호를 찾을 이메일을 입력해주세요."
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
