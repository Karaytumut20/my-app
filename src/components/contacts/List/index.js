import React, { useState } from "react";
import "./style.css"; 
function List({ contacts, deleteContact }) {
    const [filterText, setFilterText] = useState("");
    const [completed, setCompleted] = useState([]);

    const toggleCompleted = (index) => {
        const updatedCompleted = [...completed];
        if (updatedCompleted.includes(index)) {
            updatedCompleted.splice(updatedCompleted.indexOf(index), 1);
        } else {
            updatedCompleted.push(index);
        }
        setCompleted(updatedCompleted);
    };

    const filteredContacts = contacts.filter((contact) => {
        return (
            contact.fullname.toLowerCase().includes(filterText.toLowerCase()) ||
            (contact.phone_number && contact.phone_number.toLowerCase().includes(filterText.toLowerCase()))
        );
    });

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    return (
        <div>
     

            <ul className="list">
                {filteredContacts.map((contact, i) => (
                    <li key={i} className={completed.includes(i) ? "completed" : ""}>
                        <span>
                            <button
                                onClick={() => toggleCompleted(i)}
                            >
                                ✔
                            </button>
                            {contact.fullname}
                        </span>
                        {contact.phone_number && <span>{contact.phone_number}</span>}
                        <button onClick={() => deleteContact(i)}>X</button>
                    </li>
                ))}
            </ul>
            <p>Items left ({filteredContacts.length})</p>
        </div>
    );
}

export default List;
