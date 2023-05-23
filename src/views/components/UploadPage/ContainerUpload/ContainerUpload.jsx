import { Logo } from '../../Logo/Logo';
import { FormUpload } from '../FormUpload/FormUpload';

import './ContainerUpload.scss';

export const ContainerUpload = () => {
  return (
    <div className="container-upload">
      <Logo color="white" className="container-upload__logo" />
      <FormUpload />
    </div>
  );
};
