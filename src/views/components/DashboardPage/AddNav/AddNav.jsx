import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { MdAddCircleOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './AddNav.scss';

export const AddNav = ({ showAdd }) => {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="add-nav">
      <h2>{userState.username}'s Dashboard</h2>
      {showAdd && (
        <MdAddCircleOutline
          className="add-nav__icon"
          onClick={() => navigate('/uploadGif')}
        />
      )}
    </div>
  );
};
