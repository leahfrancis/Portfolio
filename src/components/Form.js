import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form name="contact v1" method="post" data-netlify="true" onSubmit="submit">
          <input type='hidden' name='form-name' value='contact v1'/>
            <label>Your Name:</label>
            <input type='text' name='fname'></input>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email'></input>
            <label>Subject:</label>
            <input type='text' name='subject'></input>
            <label>Message:</label>
            <textarea rows="6" placeholder='Type your message here' name='message'></textarea>
            <button className='btn' type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Form