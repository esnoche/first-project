import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { error } from 'console';
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if(!email || !password) {
            setErrMsg("Please enter both email and password");
            return;
        }

        axios.post("http://localhost:3001/signup", {email, password})
        .then(result => console.log(result))
        .catch(error => {
            if(error.response && error.response.data && error.response.data.error) {
                setErrMsg(error.response.data.error);
            }else {
                console.log(error);
            }
        })
        // .catch(error => console.log(error))

        console.log("Email: ", email);
        console.log("Password: ", password);
        // console.log("passLength: ", password.length);

        setEmail("");
        setPassword("");
        setErrMsg("");

    }
    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={handleSignup}>
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
                <button type='submit'>Signup</button>
                <br/>
                OR
                <br/>
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}
