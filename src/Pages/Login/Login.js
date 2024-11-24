import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToastVisibility } from "../../store/actions/toastActions";
import { setUser } from "../../store/actions/userActions";
import darkstoreService from "../../api/darkstore";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(true);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = credentials;

    try{
      const response = await darkstoreService.getLoginInfo(username, password);
      console.log(response);
      const city = response.darkstore?.city?.city || "";
      const role = response.role;
      const name = response.firstName;
      const darkstoreName = response.darkstore?.darkstoreName || "";
      const darkstoreId = response.darkstore?.darkstoreId || "";
      const email = response.email;
      dispatch(setToastVisibility(true));
      dispatch(setUser({name: name,
        email: email,
        role: role,
        darkstoreName: darkstoreName,
        darkstoreId: darkstoreId,
        city: city}))
      navigate("/layout");
      console.log("Login successful!");
    }
    catch(e) {
      console.log("Invalid credentials");
      alert("Invalid username or password.");
      return;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">STORE WARS</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
