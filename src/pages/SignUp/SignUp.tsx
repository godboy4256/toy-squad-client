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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PositionModal from "@/component/input/PositionFiled/PositionModal";

import { TextFieldLabel } from "@/component/input/TextField/TextField.style";
import ErrorMessage from "@/component/input/ErrorMessage/ErrorMessage";

type SignUpDataType = {
  email: string;
  password: string;
  password_check: string;
  name: string;
};

const CustomNullErrorCheck = (target, setState, message) => {
  if (!target) {
    setState(message);
  } else {
    setState("");
  }
};

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [positionModal, setPositionModal] = useState(false);

  const [position, setPosition] = useState({
    name: "",
    category: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [nameError, setNameError] = useState("");
  const [positionError, setPositionError] = useState("");

  const navigate = useNavigate();
  const onClickPosition = (isOpen: boolean) => setPositionModal(isOpen);
  const onSubmit = async (data: SignUpDataType) => {
    CustomNullErrorCheck(data.email, setEmailError, "이메일을 입력해주세요.");
    CustomNullErrorCheck(data.name, setNameError, "이름을 입력해주세요.");
    CustomNullErrorCheck(
      data.password,
      setPasswordError,
      "비밀번호를 입력해주세요."
    );
    CustomNullErrorCheck(
      data.password_check,
      setPasswordCheckError,
      "비밀번호 확인을 입력해주세요."
    );
    CustomNullErrorCheck(
      position.name,
      setPositionError,
      "포지션을 선택해주세요."
    );

    if (
      !(
        data.name &&
        data.email &&
        data.password &&
        data.password_check &&
        position.name
      )
    ) {
      return;
    }

    try {
      const postData = {
        email: data.email,
        password: data.password,
        name: data.name,
        position_category: position.category,
        position: position.name,
      };
      await axios.post(
        "https://port-0-toy-squad-nest-dihik2mlj5vp0tb.sel4.cloudtype.app/api/join",
        postData
      );
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <SignUpContainer>
      <SignUpLogo
        onClick={() => navigate("/main")}
        src={LogoImg}
        alt="header logo"
      />
      <SignUpTitle>간편 회원가입</SignUpTitle>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          params="email"
          label="이메일"
          placeholder="이메일을 입력하세요."
          marginBottom="30px"
          errorsMessage={emailError}
        />
        <TextField
          register={register}
          params="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          marginBottom="30px"
          errorsMessage={passwordError}
        />
        <TextField
          register={register}
          params="password_check"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요."
          marginBottom="30px"
          errorsMessage={passwordCheckError}
        />
        <TextField
          register={register}
          params="name"
          label="이름"
          placeholder="이름을 입력해주세요."
          marginBottom="30px"
          errorsMessage={nameError}
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
