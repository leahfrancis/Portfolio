import './Form.css';
import React, { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        body: data,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='form'>
      {submitted ? (
        <div>
          <h1>Thank you for your submission!</h1>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form name="contact" method="POST" onSubmit={handleSubmit} netlify>
          <input type='hidden' name='form-name' value='contact' />
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
