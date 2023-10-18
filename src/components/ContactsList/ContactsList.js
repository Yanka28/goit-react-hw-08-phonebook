import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact, Button, Title, Contacts } from './ContactsList.styled';
import { List, ListItem } from '@chakra-ui/react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredcontacts = useSelector(selectVisibleContacts);

  return (
    <Contacts>
      <Title>Contacts</Title>

      <List marginLeft="110px">
        {filteredcontacts.map(contact => (
          <Contact key={contact.id}>
            <ListItem>
              {contact.name} : {contact.number}
            </ListItem>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </Contacts>
  );
};
