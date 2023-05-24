import { Logo } from '../../Logo/Logo';
import { FormUpload } from '../FormUpload/FormUpload';
import { TiArrowBackOutline } from 'react-icons/ti';

import './ContainerUpload.scss';
import { useNavigate } from 'react-router-dom';

export const ContainerUpload = () => {
  const navigate = useNavigate();

  return (
    <div className="container-upload">
      <TiArrowBackOutline
        className="container-upload__back"
        onClick={() => navigate(-1)}
      />
      <Logo color="white" className="container-upload__logo" />
      <FormUpload />
    </div>
  );
};
