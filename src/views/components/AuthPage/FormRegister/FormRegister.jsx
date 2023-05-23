import { useForm } from 'react-hook-form';
import './FormRegister.scss';
import { registerRequest } from '../../../../api/authRequests';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { UserContext } from '../../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const FormRegister = () => {
  const { authUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await registerRequest(data);
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
    <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={
          'form-register__input ' +
          (errors.username && 'form-register__input--alert')
        }
        placeholder="Username"
        type="text"
        {...register('username', {
          required: 'required',
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        })}
      />
      <span role="alert">{errors.username?.message}</span>
      <input
        className={
          'form-register__input ' +
          (errors.email && 'form-register__input--alert')
        }
        placeholder="Email"
        type="email"
        {...register('email', {
          required: 'required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format',
          },
        })}
      />
      <span role="alert">{errors.email?.message}</span>
      <input
        className={
          'form-register__input ' +
          (errors.password && 'form-register__input--alert')
        }
        placeholder="Password"
        type="password"
        {...register('password', {
          required: 'required',
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        })}
      />
      <span role="alert">{errors.password?.message}</span>
      <button className="form-register__btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};
