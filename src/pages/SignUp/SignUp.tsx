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
import Position from '@/component/Input/Position/Position';

const SignUp = () => {
  const [formState, setFormState] = useState(0);
  const [position, setPosition] = useState(false);
  const positionOff = () => {
    setPosition(false);
  };
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
            <SignUpTitle>간편 회원가입</SignUpTitle>
            <SignUpForm>
              <TextField
                label="이메일"
                disabled={true}
                placeholder="godboy4256@gmail.com"
              />
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
              <TextField label="이름" placeholder="이름을 입력해주세요." />
              <TextField
                type="text"
                label="포지션"
                placeholder="포지션 선택"
                onFocus={() => setPosition(true)}
              />
              <TextField
                label="연락처"
                placeholder="ex) 카카오톡 ID, 휴대전화 등"
              />
              <Button value="가입하기" click_func={() => setFormState(2)} />
            </SignUpForm>
            {position && (
              <Position confirmFunc={positionOff} cancelFunc={positionOff} />
            )}
          </>
        )
      )}
    </SignUpContainer>
  );
};

export default SignUp;
