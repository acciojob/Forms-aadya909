import React from 'react';

const Card = ({ children }) => (
  <div style={{
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
  }}>
    {children}
  </div>
);

export default Card;

