import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);
  
  return <p>Home Page</p>;
};

export default HomePage;
