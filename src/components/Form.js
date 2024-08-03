import './Form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    navigate('/success'); // Redirect to success page
  };

  return (
    <div className='form'>
      {submitted ? (
        <div>
          {/* Success message or content */}
          <h2>Thank you for your submission!</h2>
        </div>
      ) : (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value="contact" />
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
