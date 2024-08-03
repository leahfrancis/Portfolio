import './Form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setSubmitted(true);
      navigate('/success'); // Redirect to success page
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='form'>
      {submitted ? (
        <div>
          {/* No content here */}
        </div>
      ) : (
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />
          <input type='hidden' name='bot-field' />
          <label>Your Name:</label>
          <input type='text' name='fname' required />
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' required />
          <label>Subject:</label>
          <input type='text' name='subject' required />
          <label>Message:</label>
          <textarea rows="6" name='message' placeholder='Type your message here' required></textarea>
          <button className='btn' type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
