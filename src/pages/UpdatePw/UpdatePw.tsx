import TextField from "@/component/input/TextField/TextField";
import React, { useEffect } from "react";
import {
  UpdatePwContainer,
  UpdatePwForm,
  UpdatePwGuide,
  UpdatePwTitle,
} from "./UpdatePw.style";
import Button from "@/component/input/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogoImg from "@/assets/images/common/logo.svg";
import { LoginLogo } from "../Login/Login.style";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FindPwDataType = {
  password: string;
  password_check: string;
};

const schema = yup
  .object({
    password: yup.string().required("새로운 비밀번호를 입력해주세요."),
    password_check: yup
      .string()
      .required("비밀번호 확인을 입력해주세요.")
      .oneOf([yup.ref("password"), null], "비밀번호 확인이 올바르지 않습니다."),
  })
  .required();

const UpdatePw = () => {
  const navigate = useNavigate();
  const urlParams = new URL(location.href).searchParams;

  useEffect(() => {
    if (!urlParams.size) {
      navigate("/main");
    }
  }, []);

  const authEmail = urlParams.get("email");
  const authToken = urlParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FindPwDataType) => {
    try {
      const postData = {
        email: authEmail,
        token: authToken,
        newPassword: data.password,
      };
      await axios.patch(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/users/pwd",
        postData
      );
      alert("비밀번호가 변경되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
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
        <TextField
          register={register}
          params="password"
          type="password"
          placeholder="비밀번호을 입력해주세요."
          marginBottom="30px"
          errorsMessage={errors?.password?.message}
        />
        <TextField
          register={register}
          params="password_check"
          type="password"
          placeholder="비밀번호를 확인해주세요."
          marginBottom="30px"
          errorsMessage={errors?.password_check?.message}
        />
        <Button>비밀번호 변경</Button>
      </UpdatePwForm>
    </UpdatePwContainer>
  );
};

export default UpdatePw;
