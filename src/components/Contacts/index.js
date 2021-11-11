import React, {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'


function Contacts() {
    const [contact, setContact] = useState([
        {
        fullname: "Tuba Özyurt",
        phone_number: "123"
        },
        {
            fullname: "Nazlı Gül",
            phone_number:"456"
        },
        {
            fullname: "Tamer Nil",
            phone_number:"678"
    }])
    
    useEffect(() => {
    console.log(contact);
    }, [contact])


    return (
        <div id="container">
            <h2 className="title">Search Contact</h2>
            <List contact={contact}/>
            <Form contact={contact} setContact={ setContact}/>
        </div>
    )
}

export default Contacts
