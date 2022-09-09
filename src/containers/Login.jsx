import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Input } from "../components/Input";
import API from "../utils/axios";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const loginSubmit = () => {
        API.post("/api/login", {
            username: username,
            password: password
        }).then(res => {
            localStorage.setItem("user-token", res.data.token);
            navigate("/");

        })
            .catch(({ message }) => {
                console.log(message);
            })
    }

    return (
        <Wrapper>
            <Input
                type={"text"}
                placeholder="Username"
                onChange={({ target }) => setUsername(target.value)}
            />
            <Input
                type={"password"}
                placeholder="Parol"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button onClick={loginSubmit} className="btn btn-create">Kirish</button>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
    padding: 100px;
`;