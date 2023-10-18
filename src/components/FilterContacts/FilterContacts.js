import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setContactFilter } from 'redux/contacts/filterSlice';
import { Filter } from './FilterContacts.styled';
import { Input } from '@chakra-ui/react';

export const FilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setContactFilter(e.target.value));
  };

  return (
    <Filter>
      Find contact by name
      <Input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={handleChangeFilter}
        border="1px"
        borderColor=" #a2b4fb"
        required
      />
    </Filter>
  );
};
