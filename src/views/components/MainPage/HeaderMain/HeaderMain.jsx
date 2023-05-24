import { Link } from 'react-router-dom';
import { Logo } from '../../Logo/Logo';
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';

import './HeaderMain.scss';

export const HeaderMain = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <header className="header-main">
      <Link to="/">
        <Logo className="header-main__logo" />
      </Link>
      <ButtonLogin setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </header>
  );
};
