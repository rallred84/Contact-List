import React from 'react';

const SingleContact = (prop) => {
  return (
    <div id="single-contact">
      <div id="contact-info">
        <p>
          <b>Name:</b>
          {prop.selectedContact.name}
        </p>
        <p>
          <b>Email:</b>
          {prop.selectedContact.email}
        </p>
        <p>
          <b>Phone:</b>
          {prop.selectedContact.phone}
        </p>
        <div>
          <b>Address: </b>
          <p>
            {prop.selectedContact.address.street}
            <br />
            {prop.selectedContact.address.city}
            {` `}
            {prop.selectedContact.address.zipcode}
          </p>
        </div>
        <p>
          <b>Company:</b>
          {prop.selectedContact.company.name}
        </p>
        <button
          onClick={() => {
            prop.setSelectedContact({});
          }}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default SingleContact;
