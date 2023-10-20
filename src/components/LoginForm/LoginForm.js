// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off" marginTop="100px">
//       <FormControl>
//         <FormLabel>
//           Email
//           <Input type="email" name="email" autoComplete="email" />
//         </FormLabel>
//       </FormControl>
//       <FormControl>
//         <FormLabel>
//           Password
//           <Input
//             type="password"
//             name="password"
//             autoComplete="current-password"
//           />
//         </FormLabel>
//       </FormControl>
//       <Button type="submit" bgGradient="linear(to-r,  #a2b4fb, yellow.100)">
//         Log In
//       </Button>
//     </form>
//   );
// };

import { useState } from 'react';
import { useAuth } from 'hooks';
import { MessageError } from './MessageError';
import { createPortal } from 'react-dom';
import { Form } from './Form';

export const LoginForm = () => {
  let [isVisible, setIsVisible] = useState(true);
  const { isLoggedIn } = useAuth();

  const handleClose = () => {
    setIsVisible(false);
  };
  console.log('isLoggedIn', isLoggedIn);
  console.log('isVisible,', isVisible);
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
