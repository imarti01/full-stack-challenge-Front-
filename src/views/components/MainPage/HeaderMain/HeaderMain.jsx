import { Logo } from '../../Logo/Logo';
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';

import './HeaderMain.scss';

export const HeaderMain = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <header className="header-main">
      <Logo className="header-main__logo" />
      <ButtonLogin setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </header>
  );
};
