import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contactId }) {
  const dispatch = useDispatch();
  const contact = useSelector((state) =>
    selectContacts(state).find((contact) => contact.id === contactId)
  );

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.li}>
      {contact.name} <br />
      {contact.phone}
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
