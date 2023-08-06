import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Loading from './Loading';

function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login').then(() => {});
    }
    else if (!isLoading && isAuthenticated && !children){
      router.push('/home').then(() => {});
    }
  }, [isLoading, isAuthenticated, children]);

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }


  return null;
}

export default RequireAuth;
