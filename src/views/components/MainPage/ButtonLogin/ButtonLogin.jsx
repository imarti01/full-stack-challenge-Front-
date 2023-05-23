import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { IoMdLogIn } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

import './ButtonLogin.scss';
import { Link } from 'react-router-dom';

export const ButtonLogin = ({ isModalOpen, setIsModalOpen }) => {
  const { userState } = useContext(UserContext);

  return (
    <>
      {!userState.username ? (
        <Link to="/login" className="button-login">
          <IoMdLogIn />
        </Link>
      ) : (
        <div className="button-info-user">
          <p
            className="button-info-user__button"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {userState.username}
            {isModalOpen ? (
              <MdKeyboardArrowUp className="button-info-user__button--arrow" />
            ) : (
              <MdKeyboardArrowDown className="button-info-user__button--arrow" />
            )}
          </p>
        </div>
      )}
    </>
  );
};
