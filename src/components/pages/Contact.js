import React, { useState } from 'react'
import './Contact.css'

function Contact(){

    const [status, setStatus] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS");
        } else {
            setStatus("ERROR");
        }
        };
        xhr.send(data);
    }


    return(
        <div className="Contact">
            <div className="title-contact">
                <h2><span>Want to work together?</span> <br /> Contact me!</h2>
            </div>
            <div className="contact-form">
                <form 
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/mknpvzan"
                    method="POST"
                >
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="subject" name="subject" id="subject" placeholder="Subject"/>
                    <textarea name="message" id="message" cols="70" rows="10" placeholder="Message"></textarea>
                    {status === "SUCCESS" ? <p className="Success-text">Thanks, I will reply as soon as possible!</p> : <button className="send-btn">SEND</button>}
                    {status === "ERROR" && <p className="Error-text">Ooops! There was an error.</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact