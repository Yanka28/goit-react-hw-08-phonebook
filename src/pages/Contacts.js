import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { selectError } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <FilterContacts />
      <div> {isLoading && !error && <b>Request in progress...</b>}</div>
      <ContactsList />
    </HelmetProvider>
  );
}
