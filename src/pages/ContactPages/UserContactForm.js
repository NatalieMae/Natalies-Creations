import React, { useState } from "react";

const UserContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
    const { name, email, message } = e.target.elements;
        let details = {
                name: name.value,
                email: email.value,
                message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
        },
                body: JSON.stringify(details),
        });
                setStatus("Submit");
        let result = await response.json();
                alert(result.status);
        };

    
    return (
        <div className="user-form">
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Please Email me with any questions!
                    <br></br>
                </h1>
            </div>
            <div>
                <label htmlFor="name">Name:   </label>
                <input type="text" id="name" required />
            </div>
            <br></br>
            <div>
                <label htmlFor="email">Email:   </label>
                <input type="email" id="email" required />
            </div>
            <br></br>
            <div>
                <label htmlFor="message">Message:   </label>
                <textarea id="message" required />
            </div>
                <button type="submit">{status}</button>
        </form>
        </div>
        );
    };

export default UserContactForm;
