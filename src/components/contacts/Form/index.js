import React, { useState } from "react";

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullname: "" });
    const [error, setError] = useState(""); // Hata mesajını saklamak için bir durum değişkeni

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "") {
            setError("Please fill in the Fullname field.");
            return;
        }

        addContact([...contacts, form]);

        setForm({ fullname: "" });
        setError("");
    }

    const onClear = () => {
        setForm({ fullname: "" });
        setError("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="fullname"></label>
                    <input id="fullname" name="fullname" placeholder="What needs to be done?" value={form.fullname} onChange={onChangeInput} required />
                </div>
                <div>
                    <button className="btn" type="submit">Add</button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}

export default Form;
