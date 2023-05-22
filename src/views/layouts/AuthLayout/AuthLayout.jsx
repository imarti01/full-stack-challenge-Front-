import { Outlet } from 'react-router-dom';
import { Logo } from '../../components/logo/Logo';

import './AuthLayout.scss';
import { ButtonAuth } from '../../components/AuthPage/ButtonAuth/ButtonAuth';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Logo className="auth-layout__logo" />
      <ButtonAuth />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
