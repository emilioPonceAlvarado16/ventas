import { Auth, Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const listener = Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn') {
        checkAuth();
      } else if (data.payload.event === 'signOut') {
          setCurrentUser(null);
      }
    });

    // checkAuth();

    return () => {
      listener();
    };
  }, []);

  const checkAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setCurrentUser(user);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      localStorage.clear();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return { currentUser, signOut };
}
