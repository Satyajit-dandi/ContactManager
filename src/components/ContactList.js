import React from 'react'
import ContactCard from './ContactCard';

function ContactList(props) {
  const renderContactList = props.contacts.map((contact=>{
      // console.log(props.contacts)
        return (
         <ContactCard contact={contact} key={contact.id}></ContactCard>
        );
    }))


  return <div className="item">
    <h2>Contact List</h2>
            {renderContactList}
    </div>
  
}

export default ContactList
