import { useAuth } from 'hooks';
import { MessageError } from './MessageError';
import { createPortal } from 'react-dom';
import { Form } from './Form';
import { useState } from 'react';

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
