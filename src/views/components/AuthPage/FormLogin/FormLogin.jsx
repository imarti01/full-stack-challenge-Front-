import { useForm } from 'react-hook-form';
import './FormLogin.scss';

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
