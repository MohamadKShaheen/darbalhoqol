import * as React from 'react';

export const EmailTemplate = ({firstName, lastName, email, phone, message}) => (
  <div>
    <h1>{firstName}!</h1>
    <h1>{lastName}</h1>
    <h1>{email}</h1>
    <h2>{phone}</h2>
    <p>{message}</p>
  </div>
);
