import React from 'react'
import trash from "../assets/images/trash3.svg";
import user from '../assets/images/person-circle.svg'

function ContactCard(props) {
    const {id, name, email} = props.contact;
  return (
    <div>
      <div className="item mx-3 my-3 d-flex border-bottom" key={id}>
        <img src={user} alt="" srcset="" />
        <div className="container">
          <div className="row">{name}</div>
          <div className="row">{email}</div>
        </div>
        <div>
          <img src={trash} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ContactCard
