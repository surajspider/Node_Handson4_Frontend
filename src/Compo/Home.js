import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Home() {
    const navi = useNavigate();
    const token = localStorage.getItem("token");
    const handleClick = () => {
        localStorage.removeItem("token");
        navi("/login");
    }

    useEffect(() => {
        if ((token) && (token !== "undefined")) {
            axios.get("https://handson4backend.onrender.com/api/", { headers: { "authorization": `Bearer ${token}` } })
                .then((res) => {
                    console.log(res.data);
                    // alert(res.data.msg);
                })
                .catch(err => console.log(err))
        }
        else {
            navi("/register");
        }
    }, [token, navi])
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home