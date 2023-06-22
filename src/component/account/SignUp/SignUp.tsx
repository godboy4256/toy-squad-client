import { useState } from 'react';
import TextField from '@/component/Input/TextField/TextField';
import Button from '@component/Input/Button/Button';
import { SignUpGuide, SignUpTitle } from './SignUp.style';

type onSubmitEmailType = {
  email: string;
};

type onSubmitSignUpType = {
  email: string;
  password: string;
  password_check: string;
  name: string;
  auth_num: string;
};

const SignUp = ({ register, handleSubmit }: any) => {
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const onSubmitSignUp = async (data: onSubmitSignUpType) => {};
  const onSubmitEmail = async (data: onSubmitEmailType) => {};

  return (
    <>
      <SignUpTitle>이메일로 계정 생성</SignUpTitle>
      <SignUpGuide>
        {isEmail ? (
          <div>인증 메일이 전송되었습니다. 인증을 완료해주세요.</div>
        ) : (
          <div>환영합니다! 인증 번호를 받을 이메일을 입력해주세요.</div>
        )}
      </SignUpGuide>
      <form onSubmit={handleSubmit(isEmail ? onSubmitSignUp : onSubmitEmail)}>
        {isEmail ? (
          <>
            <TextField />
            <TextField />
            <TextField />
            <TextField />
          </>
        ) : (
          <TextField />
        )}
        <Button value={'계정 생성'} />
      </form>
    </>
  );
};

export default SignUp;
