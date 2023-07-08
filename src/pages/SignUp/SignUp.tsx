import * as React from 'react';
import { useState } from 'react';
import LogoImg from '@/assets/images/common/logo.svg';
import Button from '@/component/Input/Button/Button';
import TextField from '@/component/Input/TextField/TextField';
import {
  EmailAuth,
  SignUpContainer,
  SignUpForm,
  SignUpGuide,
  SignUpLogo,
  SignUpTitle,
} from './SignUp.style';

const SignUp = () => {
  const [formState, setFormState] = useState(0);
  return (
    <SignUpContainer>
      {formState === 0 ? (
        <>
          <SignUpTitle>이메일 본인 확인</SignUpTitle>
          <SignUpGuide>
            원활한 서비스 제공을 위해, 이메일 인증을 진행해해주세요.
          </SignUpGuide>
          <SignUpForm>
            <EmailAuth>
              <TextField placeholder="이메일을 입력해주세요." />
              <Button
                value="인증메일 전송"
                click_func={() => setFormState(1)}
              />
            </EmailAuth>
          </SignUpForm>
        </>
      ) : (
        formState === 1 && (
          <>
            <SignUpLogo src={LogoImg} alt="header logo" />
            <SignUpTitle>회원가입</SignUpTitle>
            <SignUpForm>
              <TextField label="이메일" placeholder="이메일을 입력해주세요." />
              <TextField
                type="password"
                label="비밀번호"
                placeholder="비밀번호을 입력해주세요."
              />
              <TextField
                type="password"
                label="비밀번호 확인"
                placeholder="비밀번호를 확인해주세요."
              />
              <TextField label="닉네임" placeholder="닉네임을 입력해주세요." />
              <Button value="회원가입" click_func={() => setFormState(2)} />
            </SignUpForm>
          </>
        )
      )}
    </SignUpContainer>
  );
};

export default SignUp;
