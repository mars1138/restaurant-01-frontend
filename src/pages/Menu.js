import { useEffect } from 'react';

import LoadingSpinner from '../components/UI/LoadingSpinner';

const Menu = () => {
  useEffect(() => {
    console.log('Menu');
  }, []);

  let content = (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
        praesentium iure nostrum facere tempore quisquam similique, quam fuga
        vero nam optio, obcaecati sunt repudiandae quidem, rem eius eveniet? Ex,
        rerum.
      </p>
      <LoadingSpinner />
    </div>
  );

  return (
    <div>
      <h1>Menu</h1>
      {content}
    </div>
  );
};

export default Menu;
