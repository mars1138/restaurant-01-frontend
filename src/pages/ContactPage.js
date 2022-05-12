import { useEffect } from 'react';

import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    console.log('Contact');
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga
        dolores nihil! Consequatur ratione corporis nobis deleniti tempora dolor
        ex sit. Voluptas mollitia ea ducimus explicabo repellendus incidunt
        possimus veritatis?
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
