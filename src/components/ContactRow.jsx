import React from 'react';

const ContactRow = (prop) => {
  return (
    <tr onClick={() => prop.selectContact(prop.contact.id)}>
      <td>{prop.contact.name}</td>
      <td>{prop.contact.phone}</td>
      <td>{prop.contact.email}</td>
    </tr>
  );
};

export default ContactRow;
