import { useForm } from 'react-hook-form';
import './FormLogin.scss';
import { loginRequest } from '../../../../api/authRequests';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const FormLogin = () => {
  const { authUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await loginRequest(data);
    if (res.data?.ok) {
      authUser(res.data.user);
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: `${res}`,
        confirmButtonColor: '#EB1D36',
        iconColor: '#EB1D36',
        color: '#35185A',
      });
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        className={
          'form-login__input ' + (errors.email && 'form-login__input--alert')
        }
        {...register('email', {
          required: 'required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        })}
      />
      <span>{errors.email?.message}</span>
      <input
        type="password"
        placeholder="Password"
        className={
          'form-login__input ' + (errors.password && 'form-login__input--alert')
        }
        {...register('password', {
          required: 'required',
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        })}
      />
      <span>{errors.password?.message}</span>
      <button type="submit" className="form-login__btn">
        Log In
      </button>
    </form>
  );
};
