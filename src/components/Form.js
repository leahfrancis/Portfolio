import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
      <form action="/success.html" method="POST" data-netlify="true">
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
    </div>
  );
};

export default Form;
