import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { MdAddCircleOutline } from 'react-icons/md';

export const AddNav = ({ showAdd }) => {
  const { userState } = useContext(UserContext);
  return (
    <div>
      <h2>{userState.username}</h2>
      {showAdd && <MdAddCircleOutline />}
    </div>
  );
};
