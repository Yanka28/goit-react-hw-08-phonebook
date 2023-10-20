import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form } from './ContactForm.styled';
// import toast from 'react-hot-toast';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const ContactForm = () => {
  const toast = useToast({ position: 'top' });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const doesItExist = object => {
    return contacts.list.some(
      contact =>
        contact.name.toLowerCase() === object.name.toLowerCase() ||
        contact.number === object.number
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doesItExist({ ...state })) {
      toast({
        title: `${name} or ${number} is already in contacts.`,
        status: 'warning',
        isClosable: true,
      });
    } else {
      dispatch(addContact({ ...state }));
    }
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            value={name}
            border="1px"
            borderColor=" #a2b4fb"
            required
          />
        </FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={number}
            border="1px"
            borderColor=" #a2b4fb"
            required
          />
        </FormLabel>
      </FormControl>
      <Button type="submit" bgGradient="linear(to-r, #a2b4fb, yellow.100)">
        Add contact
      </Button>
    </Form>
  );
};
