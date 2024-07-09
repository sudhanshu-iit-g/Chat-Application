import React, { useState } from 'react';
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const Join = () => {
    const [name, setName] = useState("");

    const sendUser = () => {
        user = name;
        setName("");
    };

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>CHAT_IT_OUT</h1>
                <input 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter Your Name" 
                    type="text" 
                    value={name} 
                    id="joinInput" 
                />
                <Link 
                    onClick={(event) => !name ? event.preventDefault() : sendUser()} 
                    to={name ? "/chat" : "#"}
                >
                    <button className="joinbtn">Log In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
export { user };
