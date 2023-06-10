import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operation';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <div className={css.wraperContactList}>
      <ul className={css.conactList}>
        {getVisibleContacts().map(({ id, name, number }) => (
          <li key={id} className={css.contactListItem}>
          {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
