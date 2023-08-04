import { Auth } from 'aws-amplify';
import Account from './account';

export default function RequireAuth({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Account />;
  }
  return <>{children}</>;
}

export async function getServerSideProps(context) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const isAuthenticated = !!user;  // Si el usuario existe, isAuthenticated es verdadero

    return {
      props: { isAuthenticated },
    };
  } catch (error) {
    // Si hay un error (por ejemplo, el usuario no está autenticado), isAuthenticated es falso
    return {
      props: { isAuthenticated: false },
    };
  }
}
