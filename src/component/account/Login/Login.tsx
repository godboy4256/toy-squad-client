import IMGLogo from '@/assets/images/common/logo.svg';
import TextField from '@component/input/TextField/TextField';
import Button from '@component/input/Button/Button';
import { AccountComment, AccountLogo } from '../Account/Account.sytle';

type onSubmitLoginType = {
  email: string;
  password: string;
};

const Login = ({ register, handleSubmit }: any) => {
  const onSubmitLogin = async (data: onSubmitLoginType) => {};
  return (
    <>
      <AccountLogo id="account_logo" src={IMGLogo} alt="header logo" />
      <AccountComment>토이스쿼드에 오신 것을 환영합니다.</AccountComment>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <TextField
          register={register('email')}
          placeholder="이메일"
          style="account_input"
        />
        <TextField
          type="password"
          register={register('password')}
          placeholder="비밀번호"
          style="account_input"
        />
        <Button value="로그인" click_func={() => {}} />
      </form>
    </>
  );
};

export default Login;
