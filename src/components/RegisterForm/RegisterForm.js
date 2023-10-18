import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
  };

  return (
    //
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" name="name" autoComplete="" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" autoComplete="" />
      </FormControl>
      <FormControl>
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
  );
};
