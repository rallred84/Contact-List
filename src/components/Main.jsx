import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import SingleContact from './SingleContact';

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const [selectedContact, setSelectedContact] = useState({});

  const selectContact = async (id) => {
    try {
      const response = await fetch(`${URL}/${id}`);
      const result = await response.json();
      setSelectedContact(result);
    } catch (error) {
      console.log(error);
    }
  };

  const URL = 'http://jsonplace-univclone.herokuapp.com/users';
  const getContacts = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setContacts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? (
          <SingleContact
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

export default Main;
