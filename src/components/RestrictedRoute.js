import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
// import {
//   Alert,
//   AlertIcon,
//   AlertDescription,
//   AlertTitle,
// } from '@chakra-ui/react';

// export const MyComponent = () => {
//   return (
//     <Alert status="success">
//       <AlertIcon />
//       <AlertTitle mr={2}>Success!</AlertTitle>
//       <AlertDescription>Your message has been sent.</AlertDescription>
//     </Alert>
//   );
// };

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
