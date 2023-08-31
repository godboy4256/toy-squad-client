import * as React from 'react';
import { useState } from 'react';
import LogoImg from '@/assets/images/common/logo.svg';
import Button from '@/component/input/Button/Button';
import TextField from '@/component/input/TextField/TextField';
import {
  EmailAuth,
  SignUpContainer,
  SignUpForm,
  SignUpGuide,
  SignUpLogo,
  SignUpTitle,
} from './SignUp.style';
import Position from '@/component/input/Position/Position';

const SignUp = () => {
  const [formState, setFormState] = useState(0);
  const [position, setPosition] = useState(false);
  const positionOff = () => {
    setPosition(false);
  };
  return (
    <SignUpContainer>
      {/* {formState === 0 ? (
        <>
          <SignUpTitle>이메일 본인 확인</SignUpTitle>
          <SignUpGuide>
            원활한 서비스 제공을 위해, 이메일 인증을 진행해해주세요.
          </SignUpGuide>
          <SignUpForm>
            <EmailAuth>
              <TextField placeholder="이메일을 입력해주세요." />
              <Button onClick={() => setFormState(1)}>인증메일 전송</Button>
            </EmailAuth>
          </SignUpForm>
        </>
      ) : (
        formState === 0 && (
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
                placeholder="휴대폰 번호를 입력하세요."
              />
              <Button onClick={() => setFormState(2)}>가입하기</Button>
            </SignUpForm>
            {position && (
              <Position confirmFunc={positionOff} cancelFunc={positionOff} />
            )}
          </>
        )
        
      )} */}
      <>
        <SignUpLogo src={LogoImg} alt="header logo" />
        <SignUpTitle>간편 회원가입</SignUpTitle>
        <SignUpForm>
          <TextField label="이메일" placeholder="이메일을 입력하세요." />
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
          <TextField label="연락처" placeholder="휴대폰 번호를 입력하세요." />
          <Button onClick={() => setFormState(2)}>가입하기</Button>
        </SignUpForm>
        {position && (
          <Position confirmFunc={positionOff} cancelFunc={positionOff} />
        )}
      </>
    </SignUpContainer>
  );
};

export default SignUp;
