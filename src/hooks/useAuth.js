import { Auth, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signInError, setSignInError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);
  const router = useRouter();

  const [confirmationError, setConfirmationError] = useState(null);
  const [resendCodeError, setResendCodeError] = useState(null);


  const [canResend, setCanResend] = useState(true);
  const [resendCooldown, setResendCooldown] = useState(0);


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

  useEffect(() => {
    let cooldownTimer;
    if (resendCooldown > 0) {
      cooldownTimer = setTimeout(() => {
        setResendCooldown(prevCooldown => prevCooldown - 1);
      }, 1000); // decrementa el contador cada segundo
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(cooldownTimer);
  }, [resendCooldown]);



  const signIn = async (username, password) => {
    setIsLoading(true);
    setSignInError(null);  // reset the error state

    try {
      const user = await Auth.signIn(username, password);
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ user, isAuthenticated: true }));
      router.push('/home');
    } catch (error) {
      setSignInError(error.message);
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

  const signUp = async (email, password, username, name) => {
    setIsLoading(true);
    setSignUpError(null); // reset the error state

    try {
      await Auth.signUp({ username, password, attributes: { email, name } });
      setIsLoading(false);
      return true; // Devuelve true si el registro fue exitoso
    } catch (error) {
      setSignUpError(error.message);
      console.log('Error during sign up:', error);
      setIsLoading(false);
      return false; // Devuelve false si hubo un error
    }
};


  const confirmSignUp = async (username, code) => {
    setIsLoading(true);
    setConfirmationError(null); // reset the error state

    try {
      await Auth.confirmSignUp(username, code);
      setIsLoading(false);
      return true; // Devuelve true si la confirmación fue exitosa
    } catch (error) {
      setConfirmationError(error.message);
      console.log('Error confirming sign up:', error);
      setIsLoading(false);
      return false; // Devuelve false si hubo un error
    }
};

  const resendConfirmationCode = async (username) => {
    setIsLoading(true);
    setResendCodeError(null);
  
    if (!canResend) {
      setResendCodeError("Por favor espera antes de reenviar el código.");
      setIsLoading(false);
      return;
    }
  
    try {
      await Auth.resendSignUp(username);
      
      // Inicia el temporizador de reenvío
      setCanResend(false);
      setResendCooldown(60); // Establece un intervalo de tiempo de 60 segundos (puedes ajustarlo según necesites)
    } catch (error) {
      setResendCodeError(error.message);
      console.log('Error resending confirmation code:', error);
    }
  
    setIsLoading(false);
  };

  return { currentUser, canResend,resendCooldown,isAuthenticated, signOut, setConfirmationError,signIn, signUp, confirmSignUp ,resendConfirmationCode ,isLoading, isSigningOut, signInError, signUpError ,setSignInError, setSignUpError,confirmationError,resendCodeError};
}
