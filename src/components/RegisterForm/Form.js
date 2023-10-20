import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const Form = ({ setIsVisible }) => {
  const dispatch = useDispatch();
  let { isLoggedIn } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    console.log('isLoggedIn', isLoggedIn);
    setIsVisible(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" autoComplete="" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" autoComplete="" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" autoComplete="" />
        </FormControl>
        <Button
          type="submit"
          bgGradient="linear(to-r,  #a2b4fb, yellow.100)"
          marginTop="10px"
        >
          Register
        </Button>
      </form>
    </>
  );
};
