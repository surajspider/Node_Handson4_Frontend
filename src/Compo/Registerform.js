import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registerform() {

    const [data, setData] = useState({
        email: "",
        password: "",
        contact: "",
        address: ""
    });
    // const [store, setStore] = useState([]);
    const navi = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);

        axios.post("https://handson4backend.onrender.com/api/register", data)
            .then((res) => {
                console.log(res.data);
                // setStore(res.data);
                alert(res.data.msg);
                localStorage.setItem("token", res.data.token);
                if (res.data.msg === "User Registered Successfully!") {
                    navi("/");
                }

            })
            .catch(err => console.log(err));
        // axios.post('http://localhost:5000/api/register', data)
        //     .then((res) => {
        //         console.log(res.data);
        //         // localStorage.setItem("token", res.data.token);
        //         navi("/");
        //     })
        //     .catch(err => console.log(err));
        setData({
            email: "",
            password: "",
            contact: "",
            address: ""
        })
    }

    return (
        <div className="register-container">
            <h1>Register Page</h1>
            <form>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' value={data.email} onChange={handleInput} />
                </div><br />

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={data.password} onChange={handleInput} />
                </div><br />

                <div className="form-group">
                    <label htmlFor='contact'>Contact</label>
                    <input type='number' name='contact' id='contact' value={data.contact} onChange={handleInput} />
                </div><br />

                <div className="form-group">
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address' id='address' value={data.address} onChange={handleInput} />
                </div><br />

                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );


}

export default Registerform