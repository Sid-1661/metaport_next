import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return null;
};

export default ScrollToTop;