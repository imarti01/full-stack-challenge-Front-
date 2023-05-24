import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

export const ModalHeader = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  const { logoutProvider } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('token');
    logoutProvider();
  };

  return (
    <ul
      className={
        'button-info-user__modal' + (isModalOpen ? '--active' : '--disactive')
      }
      onMouseLeave={() => setIsModalOpen(false)}
    >
      <li onClick={() => navigate('/uploadGif')}>Add Gif</li>
      <li onClick={() => navigate('/dashboard')}>Dashboard</li>
      <li onClick={logout}>Logout</li>
    </ul>
  );
};
