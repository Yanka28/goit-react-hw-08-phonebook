import { useAuth } from 'hooks';
import { MessageError } from './MessageError';
import { createPortal } from 'react-dom';
import { Form } from './Form';
import { useState } from 'react';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();
//   let { isLoggedIn } = useAuth();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//     console.log('isLoggedIn', isLoggedIn);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <FormControl isRequired>
//           <FormLabel>Username</FormLabel>
//           <Input type="text" name="name" autoComplete="" />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input type="email" name="email" autoComplete="" />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input type="password" name="password" autoComplete="" />
//         </FormControl>
//         <Button
//           type="submit"
//           bgGradient="linear(to-r,  #a2b4fb, yellow.100)"
//           marginTop="10px"
//         >
//           Register
//         </Button>
//       </form>
//       {/* <MyComponent /> */}
//       {isLoggedIn === '' && createPortal(<MyComponent />, document.body)}
//       {/* {isLoggedIn === '' && <MyComponent />} */}
//     </>
//   );
// };

export const RegisterForm = () => {
  let [isVisible, setIsVisible] = useState(true);

  const { isLoggedIn } = useAuth();

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Form setIsVisible={setIsVisible} />
      {isLoggedIn === '' &&
        createPortal(
          <MessageError isVisible={isVisible} handleClose={handleClose} />,
          document.body
        )}
    </>
  );
};
