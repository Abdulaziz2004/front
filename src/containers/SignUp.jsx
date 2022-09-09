import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../components/Input";
import API from "../utils/axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const submit = () => {
    setErrorMessage("");
    setSuccessMessage("");

    const reqBody = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };

    API.post("/api/signup", reqBody)
      .then((res) => {
        setSuccessMessage(res.data.message);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((err) => setErrorMessage(err.response.data.message));
  };

  return (
    <Wrapper>
      <p className="success">{successMessage}</p>
      <p className="error">{errorMessage}</p>
      <Input
        placeholder="Username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        type={"password"}
        placeholder="Parol"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Input
        type={"password"}
        placeholder="Parolni takrorlang!"
        onChange={({ target }) => setConfirmPassword(target.value)}
      />
      <button onClick={submit} className="btn btn-create">
        Ro'yhatdan o'tish
      </button>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  padding: 50px 100px;

  .success,
  .error {
    font-size: 24px;
  }

  .success {
    color: #06d365;
  }

  .error {
    color: #d33606;
  }
`;
