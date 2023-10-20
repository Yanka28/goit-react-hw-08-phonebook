import { useAuth } from 'hooks';

import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from '@chakra-ui/react';

export const MessageError = ({ isVisible, handleClose }) => {
  const { isLoggedIn } = useAuth();

  console.log('isVisible', isVisible);
  console.log('IsLoggedIn', isLoggedIn);

  return (
    <>
      {' '}
      {isVisible && (
        <Alert status="error" color="white">
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>Oops...do it again</AlertDescription>
          <button onClick={handleClose}>Close</button>
        </Alert>
      )}
    </>
  );
};
