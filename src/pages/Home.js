import { Box } from '@chakra-ui/react';
import img from '../img/telephone.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Box
      style={styles.container}
      bgImage={img}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <h1 style={styles.title}>
        Welcome, register on our site and save your contacts{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </Box>
  );
}
