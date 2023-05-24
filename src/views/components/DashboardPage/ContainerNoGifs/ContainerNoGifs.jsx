import { MdAddCircleOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './ContainerNoGifs.scss';

export const ContainerNoGifs = () => {
  const navigate = useNavigate();
  return (
    <div className="container-nogifs">
      <MdAddCircleOutline
        className="container-nogifs__icon"
        onClick={() => navigate('/uploadGif')}
      />
      <h4>You haven't uploaded anything!</h4>
    </div>
  );
};
