import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { IoMdLogIn } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

import './ButtonLogin.scss';

export const ButtonLogin = () => {
  const { userState } = useContext(UserContext);
  return (
    <>
      {!userState.username ? (
        <IoMdLogIn className="button-login" />
      ) : (
        <p className="button-info-user">
          {userState.username}
          <MdKeyboardArrowDown className="button-info-user__arrow" />
        </p>
      )}
    </>
  );
};
