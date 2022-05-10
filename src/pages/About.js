import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    console.log('About');
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
        voluptatum est quam dolores vel, sit accusamus id harum facilis eveniet
        nulla quis asperiores eius minus inventore, doloribus necessitatibus
        fugit.
      </p>
      <h2>Chef Lorenzo</h2>
      <img alt="chef portrait" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque
        voluptatum est quam dolores vel, sit accusamus id harum facilis eveniet
        nulla quis asperiores eius minus inventore, doloribus necessitatibus
        fugit.
      </p>
    </div>
  );
};

export default About;
