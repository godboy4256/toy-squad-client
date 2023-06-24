import { useForm } from 'react-hook-form';
import IMGXIcon from '../../assets/images/common/x_icon.svg';
import { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import {
  AccountContainer,
  AccountManagement,
  AccountOff,
} from './Account.sytle';
import Button from '@component/input/Button/Button';

const AccountModal = () => {
  const { register, handleSubmit } = useForm();
  const [accountType, setAccountType] = useState<'login' | 'signup'>('login');
  return (
    <>
      <div className="modal_background"></div>
      <AccountContainer className="bg_color_white">
        <AccountOff>
          <img src={IMGXIcon} alt="login popup off x icon" />
        </AccountOff>
        {accountType === 'login' && (
          <Login register={register} handleSubmit={handleSubmit} />
        )}
        {accountType === 'signup' && (
          <SignUp register={register} handleSubmit={handleSubmit} />
        )}
        <AccountManagement className="flex_box">
          <Button value="계정 찾기" click_func={() => {}} />
          <div id="signup_link" className="flex_box">
            {accountType === 'login'
              ? '아직 회원이 아니신가요?'
              : '이미 계정이 있으신가요?'}
            <Button
              value={accountType === 'login' ? '회원가입' : '로그인'}
              click_func={() =>
                setAccountType(accountType === 'login' ? 'signup' : 'login')
              }
            />
          </div>
        </AccountManagement>
      </AccountContainer>
    </>
  );
};

export default AccountModal;
