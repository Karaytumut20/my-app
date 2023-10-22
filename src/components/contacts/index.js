import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css"; // Stil dosyasını doğru şekilde import edin

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Learn React",
        },
        {
            fullname: "Learn JavaScript",
        },
        {
            fullname: "Have a life!",
        },
    ]);

    const deleteContact = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    };

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1 className="text">todos</h1>
            <Form addContact={setContacts} contacts={contacts} />
            <List contacts={contacts} deleteContact={deleteContact} />
        </div>
    );
}

export default Contacts;
