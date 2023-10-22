import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const toast = useToast();

  function message() {
    toast({
      position: 'top',
      title: 'Помилка!',
      description: 'Ви вводите некоректні дані, спробуйте ще раз',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }

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
    if (isLoggedIn === '') {
      message();
    }
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
          bgGradient="linear(to-r, #a2b4fb, yellow.100)"
          marginTop="10px"
        >
          Register
        </Button>
      </form>
    </>
  );
};
