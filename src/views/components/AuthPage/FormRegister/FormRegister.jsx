import { useForm } from 'react-hook-form';
import './FormRegister.scss';

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        Log In
      </button>
    </form>
  );
};
