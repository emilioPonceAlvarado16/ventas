import { Auth, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const localAuth = JSON.parse(localStorage.getItem('auth'));
        if (localAuth) {
          setCurrentUser(localAuth.user);
          setIsAuthenticated(localAuth.isAuthenticated);
        } else {
          const user = await Auth.currentAuthenticatedUser();
          setCurrentUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('auth', JSON.stringify({ user, isAuthenticated: true }));
        }
      } catch (error) {
        setCurrentUser(null);
        setIsAuthenticated(false);
        localStorage.setItem('auth', JSON.stringify({ user: null, isAuthenticated: false }));
      }
      setIsLoading(false);
    };

    const authListener = (data) => {
      switch(data.payload.event) {
        case 'signIn':
          checkAuth();
          break;
        case 'signOut':
          setCurrentUser(null);
          setIsAuthenticated(false);
          localStorage.setItem('auth', JSON.stringify({ user: null, isAuthenticated: false }));
          break;
      }
    };

    Hub.listen('auth', authListener);
    checkAuth();

    return () => {
      Hub.remove('auth', authListener);
    };
  }, []);

  const signIn = async (username, password) => {
    setIsLoading(true);

    try {
      const user = await Auth.signIn(username, password);
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ user, isAuthenticated: true }));
      router.push('/home');
    } catch (error) {
      console.log('Error signing in:', error);
    }

    setIsLoading(false);
  };

  const signOut = async () => {
    setIsSigningOut(true);

    try {
      await Auth.signOut();
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.setItem('auth', JSON.stringify({ user: null, isAuthenticated: false }));
    } catch (error) {
      console.log('Error signing out:', error);
    }

    setIsSigningOut(false);
  };

  const signUp = async (username, password, email, name) => {
    setIsLoading(true);
  
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  
    setIsLoading(false);
  };

  return { currentUser, isAuthenticated, signOut, signIn, signUp, isLoading, isSigningOut };
}
