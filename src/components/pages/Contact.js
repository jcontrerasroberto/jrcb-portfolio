import React from 'react'
import './Contact.css'

function Contact(){

    const handleSubmit = (event) => {
        console.log("Hola");
    }


    return(
        <div className="Contact">
            <div className="title-contact">
                <h2><span>Want to work together?</span> <br /> Contact me!</h2>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="subject" name="subject" id="subject" placeholder="Subject"/>
                    <textarea name="message" id="message" cols="70" rows="10" placeholder="Message"></textarea>
                    <button className="send-btn">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact