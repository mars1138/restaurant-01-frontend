import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';

import MenuNav from './MenuNav';
// import LoadingSpinner from '../UI/LoadingSpinner';
import MenuFiltered from './MenuFiltered';

const MenuList = (props) => {
  const [menu, setMenu] = useState('All');
  const menuLinks = [
    { id: 0, title: 'All' },
    { id: 1, title: 'Salad' },
    { id: 2, title: 'Pasta' },
    { id: 3, title: 'Pizza' },
    { id: 4, title: 'Dessert' },
  ];

  let content;

  const menuHandler = (targetMenu) => {
    setMenu(targetMenu);
  };

  if (menu === 'All') {
    content = (
      <>
        {menuLinks.map((link) => {
          return (
            <MenuFiltered
              key={link.id}
              dishes={props.menu.filter(
                (dish) => dish.type === link.title.toLowerCase()
              )}
              type={`${link.title}`}
            />
          );
        })}
      </>
    );
  } else {
    content = (
      <MenuFiltered
        dishes={props.menu.filter(
          (dish) => dish.type === `${menu.toLowerCase()}`
        )}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="container-text flex-column">
        <h2>Online Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
          voluptatum est quam dolores vel, sit accusamus id harum facilis
          eveniet nulla quis asperiores eius minus inventore, doloribus
          necessitatibus fugit.
        </p>
      </div>
      <MenuNav setMenu={menuHandler} menuLinks={menuLinks} />
      {content}
    </React.Fragment>
  );
};

export default MenuList;
