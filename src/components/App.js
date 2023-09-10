
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import ContactCard from './ContactCard';
function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

    console.log(contacts);

  useEffect(() => {
    const retrivelcontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(contacts);
    // if (retrivelcontacts) setContacts(retrivelcontacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
    console.log(contacts);


  return (
    <>
      <div>
        <Header></Header>
        <AddContact addContactHandler={addContactHandler}></AddContact>
        <ContactList contacts={contacts}></ContactList>
      </div>
    </>
  );
}

export default App;
