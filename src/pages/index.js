import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return <Loading/>; 
};

export default IndexPage;
