import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const creds = {
    login: "admin",
    password: "admin123",
  };

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
  });

  const onLogin = () => {
    return (
      inputValue.login === creds.login && inputValue.password === creds.password
    );
  };
  return (
    <div className="main-login">
      <div className="inp1">
        <input
          type="text"
          value={inputValue.login}
          onChange={(e) => {
            setInputValue({ ...inputValue, login: e.target.value });
          }}
        />
      </div>
      <div className="inp2">
        <input
          type="text"
          value={inputValue.password}
          onChange={(e) => {
            setInputValue({ ...inputValue, password: e.target.value });
          }}
        />
      </div>
      {onLogin() ? (
        <Link to="/todos">
          <button onClick={onLogin} className="ent-btn">
            Enter
          </button>
        </Link>
      ) : (
        <div className="center">
         <div className="ring"></div>
         <span className="loading-tx">loading...</span>
      </div>
      )}
    </div>
  );
};
