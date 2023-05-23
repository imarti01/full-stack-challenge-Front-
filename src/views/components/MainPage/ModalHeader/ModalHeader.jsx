import { useNavigate } from 'react-router-dom';

export const ModalHeader = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  return (
    <ul
      className={
        'button-info-user__modal' + (isModalOpen ? '--active' : '--disactive')
      }
      onMouseLeave={() => setIsModalOpen(false)}
    >
      <li onClick={() => navigate('/uploadGif')}>Add Gif</li>
      <li onClick={() => navigate('/dashboard')}>Dashboard</li>
      <li>Logout</li>
    </ul>
  );
};
