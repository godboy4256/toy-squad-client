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

type FindPwDataType = {
  email: string;
};

const FindPw = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: FindPwDataType) => {
    // try {
    //   const postData = {
    //     email: data.email,
    //   };
    //   await axios.post("http://localhost:3001/api/join", postData);
    //   alert("회원가입이 완료되었습니다.");
    //   navigate("/login");
    // } catch (error) {
    //   alert(error.response.data.message);
    // }
    // alert("이메일이 전송되었습니다.");
    navigate("/updatePw");
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
        <TextField placeholder="이메일을 입력해주세요." />
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
