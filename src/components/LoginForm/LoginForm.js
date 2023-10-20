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
