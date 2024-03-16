import React, { useState } from 'react'
const Connect = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }};
        return (
            <div className="connect">
                <div className="content">
                    <div className="contact-info">
                        <h3>Send us a message here</h3>
                        <p>Feel free to reach out through contact form or find contact information below
                            .Your feedback ,Questions and Queries are important..
                        </p>
                        <ul>
                            <li>arun@gmail.com</li>
                            <li>+91 1234567890</li>
                            <li>location,street-3-34,kottayam<br />
                                Andhrapradesh,India</li>
                        </ul>
                    </div>
                    <div className="form">
                        <form onSubmit={onSubmit} >
                            <h3>You will get responce within limited time</h3>
                            <input type="text" name="name" placeholder='Enter your name...' required />
                            <input type="tel||email" name='phone' placeholder='Enter your PhoneNo or email...' required />
                            <textarea type="text" name='Query' placeholder='Enter querie ,feedback......' rows={5} required />
                            <button>Send</button>
                            <span>{result}</span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default Connect