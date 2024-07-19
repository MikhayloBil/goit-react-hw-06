import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.some((contact) => contact.name === name);
    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(name, phone));
    setName("");
    setPhone("");
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <div className={css.div}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={css.div}>
        <label>Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
