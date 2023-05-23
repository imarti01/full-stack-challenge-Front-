import { ButtonLogin } from '../../ButtonLogin/ButtonLogin';
import { Logo } from '../../Logo/Logo';

import './HeaderMain.scss';

export const HeaderMain = () => {
  return (
    <header className="header-main">
      <Logo className="header-main__logo" />
      <ButtonLogin />
    </header>
  );
};
