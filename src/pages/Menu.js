import { useEffect } from 'react';

import LoadingSpinner from '../components/UI/LoadingSpinner';

const Menu = () => {
  useEffect(() => {
    console.log('Menu');
  }, []);

  let content = (
    <div>
      <LoadingSpinner />
    </div>
  );

  return (
    <div>
      <p>Menu</p>
      {content}
    </div>
  );
};

export default Menu;
