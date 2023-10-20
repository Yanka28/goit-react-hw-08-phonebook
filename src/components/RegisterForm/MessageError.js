import { useAuth } from 'hooks';

import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Center,
  Button,
} from '@chakra-ui/react';

export const MessageError = ({ isVisible, handleClose }) => {
  const { isLoggedIn } = useAuth();

  console.log('isVisible', isVisible);
  console.log('IsLoggedIn', isLoggedIn);

  return (
    <Center h="5vh">
      {' '}
      {isVisible && (
        <Alert
          borderRadius="md"
          status="error"
          bg="red.200"
          color="white"
          width="20%"
          height="65px"
          br="4px"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>Oops...do it again</AlertDescription>
          <Button onClick={handleClose} color="red.200" mr="auto">
            Close
          </Button>
        </Alert>
      )}
    </Center>
  );
};
