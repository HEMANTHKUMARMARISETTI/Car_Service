import React, { useState } from 'react';
import '../../Styles/page/contact.css'


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform form validation here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    const isValidEmail = emailRegex.test(formData.email);
  
    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return; // Prevent further processing if email is invalid
    }
  
    if (!formData.message) {
      alert('Please enter a message.');
      return; // Prevent further processing if message is empty
    }
  
    // Handle form submission (e.g., send data to a server)
    // You can replace the following code with your server-side logic
  
    // Simulate a delay (e.g., for demo purposes)
    setTimeout(() => {
      setIsSubmitted(true);
  
      // Clear the form fields after submission (optional)
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1000); // Delay for 1 second (adjust as needed)
  };
  

  return (
    <div>
       <div class="image-container">
        <img src={require('../../assets/img/contact.jpg')} alt=""></img>
        <div class="about-name">CONTACT</div>
       </div>
      <div className="contact-form">
      <div className="contact-details">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <p>Thank you for your message. We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className="contact-image">
        <img src={require('../../assets/img/call.jpg')} alt="Contact Us" />
      </div>
    </div>
    </div>
    
  );
}

export default Contact;
