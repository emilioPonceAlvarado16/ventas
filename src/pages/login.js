import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Login from '@/components/Login';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/home').then(() => {});
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <Loading/>; 
  }

  return (

    <Login/>
  
  )
}
