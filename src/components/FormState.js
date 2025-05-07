import React, { useState } from 'react';
import Card from './Card';

const FormState = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    if (!e?.target?.id) return; // Prevent crash
    const inputId = e.target.id;
    setFormData({ ...formData, [inputId]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with useState:', formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input
            id="full_name"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            id="password_confirmation"
            type="password"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
