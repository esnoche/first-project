import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if(!email || !password) {
            setErrMsg("Please enter both email and password");
            return;
        }

        axios.post("http://localhost:3001/login", {email, password})
        .then((response) => {
            console.log(response.data);
            setLoggedIn(true);
        })
        .catch((error) => {
            console.log(error);
            setErrMsg("invalid email or password");
        });


        console.log("Email: ", email);
        console.log("Password: ", password);

        setEmail("");
        setPassword("");
        setErrMsg("");

    }

    if(loggedIn) {
        navigate("/landing");
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                {errMsg && <p>{errMsg}</p>}
                <label>Email:</label>
                <div>
                    <input
                        type='email'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <label>Password:</label>
                <div>
                    <input
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
                <br/>
                OR
                <br/>
                <Link to="/signup">Signup</Link>
            </form>
        </div>
    )
}
