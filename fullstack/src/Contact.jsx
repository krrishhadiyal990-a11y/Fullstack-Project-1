import { useState } from "react";


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent ✅");

        console.log(formData);

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send Message</button>
            </form>

            <div className="contact-info">
                <p>📞 +91 98765 43210</p>
                <p>✉️ support@example.com</p>
                <p>📍 Ahmedabad, India</p>
            </div>
        </div>
    );
}

export default Contact;