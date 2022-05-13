import { useEffect } from 'react';

import HeroVideo from '../components/layout/HeroVideo';
import History from '../components/home/History';
import FeaturedDishes from '../components/home/FeaturedDishes';
import Locations from '../components/home/Locations';

const HomePage = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <div>
      <HeroVideo />
      <History />
      <FeaturedDishes />
      <Locations />
    </div>
  );
};

export default HomePage;
