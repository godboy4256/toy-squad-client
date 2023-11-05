import TextField from "@/component/input/TextField/TextField";
import React from "react";
import {
  UpdatePwContainer,
  UpdatePwForm,
  UpdatePwGuide,
  UpdatePwTitle,
} from "./UpdatePw.style";
import Button from "@/component/input/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import axios from "axios";
import LogoImg from "@/assets/images/common/logo.svg";
import {
  AccountButton,
  AccountContainer,
  LoginLogo,
} from "../Login/Login.style";

type FindPwDataType = {
  email: string;
};

const UpdatePw = () => {
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
    alert("비밀번호가 변경되었습니다.");
  };
  return (
    <UpdatePwContainer>
      <LoginLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="login page logo"
      />
      <UpdatePwTitle>비밀번호 변경</UpdatePwTitle>
      <UpdatePwGuide>
        링크를 통해 인증을 완료했습니다. 비밀번호를 변경할 수 있습니다.
      </UpdatePwGuide>
      <UpdatePwForm onSubmit={handleSubmit(onSubmit)}>
        <TextField type="password" placeholder="새 비밀번호 입력" />
        <TextField type="password" placeholder="새 비밀번호 확인" />
        <Button>비밀번호 변경</Button>
      </UpdatePwForm>
      <AccountContainer>
        <AccountButton onClick={() => navigate("/login")}>로그인</AccountButton>
        <AccountButton onClick={() => navigate("/signUp")}>
          회원가입
        </AccountButton>
      </AccountContainer>
    </UpdatePwContainer>
  );
};

export default UpdatePw;
