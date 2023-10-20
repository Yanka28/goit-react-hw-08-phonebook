import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Button,
  Center,
} from '@chakra-ui/react';

export const MessageError = ({ isVisible, handleClose }) => {
  return (
    <Center h="5vh">
      {isVisible && (
        <Alert
          borderRadius="md"
          status="error"
          bg="red.200"
          color="white"
          width="30%"
          height="65px"
          br="4px"
        >
          <AlertIcon />
          {/* <AlertTitle mr={2}>Error!</AlertTitle> */}
          <AlertDescription>
            Oops... such user does not exist or the password is incorrect
          </AlertDescription>
          <Button onClick={handleClose} color="red.200">
            Close
          </Button>
        </Alert>
      )}
    </Center>
  );
};
