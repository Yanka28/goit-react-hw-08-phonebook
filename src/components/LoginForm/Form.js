import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl isRequired>
        <FormLabel>Email </FormLabel>
        <Input type="email" name="email" autoComplete="email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password </FormLabel>
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </FormControl>
      <Button type="submit" bgGradient="linear(to-r,  #a2b4fb, yellow.100)">
        Log In
      </Button>
    </form>
  );
};
