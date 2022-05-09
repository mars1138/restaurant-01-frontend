import { useEffect } from 'react';

import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    console.log('Contact');
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
