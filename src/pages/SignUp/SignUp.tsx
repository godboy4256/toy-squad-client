import * as React from "react";
import LogoImg from "@/assets/images/common/logo.svg";
import Button from "@/component/input/Button/Button";
import TextField from "@/component/input/TextField/TextField";
import {
  SignUpContainer,
  SignUpForm,
  SignUpLogo,
  SignUpTitle,
  SignUpPosition,
} from "./SignUp.style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PositionModal from "@/component/input/PositionFiled/PositionModal";

import { TextFieldLabel } from "@/component/input/TextField/TextField.style";
import ErrorMessage from "@/component/input/ErrorMessage/ErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SendToServer } from "@/utils/SendToServer";

type SignUpDataType = {
  email: string;
  password: string;
  password_check: string;
  name: string;
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
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .min(8, "비밀번호는 8글자 이상입니다.")
      .max(15, "비밀번호는 15글자 이하입니다."),
    password_check: yup
      .string()
      .required("비밀번호 확인을 입력해주세요.")
      .oneOf([yup.ref("password"), null], "비밀번호 확인이 올바르지 않습니다."),
    name: yup
      .string()
      .required("이름을 입력해주세요.")
      .min(2, "이름은 두 글자 이상입니다.")
      .max(10, "이름은 10자 이하입니다."),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [positionModal, setPositionModal] = useState(false);
  const [positionError, setPositionError] = useState("");
  const [position, setPosition] = useState({
    name: "",
    category: "",
  });

  const navigate = useNavigate();
  const onClickPosition = (isOpen: boolean) => setPositionModal(isOpen);
  const customSubmit = (event) => {
    event.preventDefault();
    if (!position.name) {
      setPositionError("포지션을 선택해주세요.");
    } else {
      setPositionError("");
    }
    handleSubmit(async (formData: SignUpDataType) => {
      try {
        if (!position.name) return;
        const postData = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          position_category: position.category,
          position: position.name,
        };
        SendToServer({
          path: "join",
          method: "POST",
          data: postData,
          callBackSuccess: (response) => {
            if (!response) return;
            alert("회원가입이 완료되었습니다.");
            navigate("/login");
          },
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    })(event);
  };

  return (
    <SignUpContainer>
      <SignUpLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="header logo"
      />
      <SignUpTitle>간편 회원가입</SignUpTitle>
      <SignUpForm onSubmit={customSubmit}>
        <TextField
          register={register}
          params="email"
          label="이메일"
          placeholder="이메일을 입력하세요."
          marginBottom="30px"
          errorsMessage={errors?.email?.message}
        />
        <TextField
          register={register}
          params="password"
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          marginBottom="30px"
          errorsMessage={errors?.password?.message}
        />
        <TextField
          register={register}
          params="password_check"
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요."
          marginBottom="30px"
          errorsMessage={errors?.password_check?.message}
        />
        <TextField
          register={register}
          params="name"
          label="이름"
          placeholder="이름을 입력해주세요."
          marginBottom="30px"
          errorsMessage={errors?.name?.message}
        />
        <TextFieldLabel>나의 포지션</TextFieldLabel>
        <SignUpPosition
          active={position.name && position.category ? true : false}
          error={positionError}
          onClick={() => onClickPosition(true)}
        >
          {position.name ? position.name : "클릭하여 포지션을 선택해주세요."}
        </SignUpPosition>
        {positionError && <ErrorMessage message={positionError} />}
        {positionModal && (
          <PositionModal
            setPosition={setPosition}
            onClickPosition={onClickPosition}
          />
        )}
        <Button>가입하기</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
