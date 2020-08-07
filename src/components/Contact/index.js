import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if(e.target.value === '') {
      setErrorMessage(`${capitalizeFirstLetter(e.target.name)} field cannot be empty.`);
    } else {
      setErrorMessage('');
    }
    
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setValidEmail(`Your email is invalid.`);
      } else {
        setValidEmail('');
      }
    }

    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
            <p className="error-text">{validEmail}</p>
          </div>
        )}
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;