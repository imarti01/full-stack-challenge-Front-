import { Link, useNavigate } from 'react-router-dom';
import './ButtonAuth.scss';
import { useRef } from 'react';

export const ButtonAuth = () => {
  const buttonRef = useRef();
  const loginRef = useRef();
  const signupRef = useRef();
  const navigate = useNavigate();

  const handleColorLogin = () => {
    buttonRef.current.classList.remove('button-auth__right');
    loginRef.current.classList.remove('button-auth__login--purple-text');
    signupRef.current.classList.add('button-auth__signup--purple-text');
    navigate('/login');
  };
  const handleColorSignup = () => {
    buttonRef.current.classList.add('button-auth__right');
    loginRef.current.classList.add('button-auth__login--purple-text');
    signupRef.current.classList.remove('button-auth__signup--purple-text');
    navigate('/login/signup');
  };

  return (
    <div className="button-auth">
      <div
        ref={loginRef}
        className="button-auth__login"
        onMouseOver={handleColorLogin}
      >
        Log In
      </div>
      <div
        ref={signupRef}
        className="button-auth__signup button-auth__signup--purple-text"
        onMouseOver={handleColorSignup}
      >
        Sign Up
      </div>
      <div
        ref={buttonRef}
        className="button-auth__board button-auth__left"
      ></div>
    </div>
  );
};
