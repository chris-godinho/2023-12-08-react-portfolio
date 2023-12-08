import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'senderName') {
      setSenderName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!senderName) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!validateEmail(email) || !email) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message.');
      return;
    }

    setSenderName('');
    setEmail('');
    setMessage('');
    alert(`Message sent!`);
  };

  return (
    <div className="resume-block">
      <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          type="senderName"
          placeholder="Your name here"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">E-mail</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="youremail@here.com"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Your message here"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        />
      </div>
        <button type="submit" className="btn custom-btn">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;