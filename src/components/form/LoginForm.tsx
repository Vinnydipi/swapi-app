import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { appDispatch } from "../../store/reduxStore";
import { login } from "../../store/authSlice";
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<appDispatch>();
  const [username, setUsername] = useState<string | null>(null);
  const [validUsername, setValidUsername] = useState<boolean>(true);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (username !== null) {
      dispatch(login(username));
      navigate('/home');
    }
    else return;
  }

  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const curUsername = event.target.value;
    setUsername(curUsername);
    const isValid = curUsername.length >= 3;
    setValidUsername(isValid);
  }

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="loginFormTitle">
          <h1>LOGIN</h1>
        </div>
        <div className="loginFormGroup">
          <label className="loginFormLabel">Username</label>
          <input 
            className={validUsername ? 'validFormInput' : 'invalidFormInput'}
            type="text"
            onChange={handleUsernameInputChange}
          />
          {!validUsername && <p className="formError">Invalid username!</p>}
        </div>
        <div className="loginFormGroup">
          <button className="loginButton">Login</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm;