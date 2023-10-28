import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navi = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    // const [store, setStore] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post("https://handson4backend.onrender.com/api/login", data)
            .then((res) => {
                alert(res.data.msg);
                // setStore(res.data);
                localStorage.setItem("token", res.data.token);
                // navi("/");
                if (res.data.msg === "User logged in Successfully!") {
                    navi("/");
                }

            })
            .catch(err => console.log(err));
        setData({
            email: "",
            password: ""
        })
    }
    return (
        <div className="register-container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' value={data.email} onChange={handleInput} />
                </div><br />

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={data.password} onChange={handleInput} />
                </div><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login