import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      borderRadius="md"
      w="100%"
      h="65"
      p={4}
      color="black"
      bgGradient="linear(to-r, brand.900, brand.800)"
    >
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Box>
  );
};
