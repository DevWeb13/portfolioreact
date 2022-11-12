import React from 'react';
import Form from '../../components/Form/Form';
import ConstructionLogo from '../../components/ConstructionLogo/ConstructionLogo';

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <main className="contactContainer" id="contactContainer">
        <Form />

        <section className="other">
          <ConstructionLogo />
        </section>
      </main>
    </>
  );
}

export default Contact;
