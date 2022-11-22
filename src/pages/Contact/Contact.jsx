import React from 'react';
import Form from '../../components/Form/Form';
import ConstructionLogo from '../../components/ConstructionLogo/ConstructionLogo';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <main className="contactContainer" id="contactContainer">
        <Form />

        <section className="other">
          <ButtonLink
            href="./CV_GIULIANO_LOIC.pdf"
            text="Cliquer ici pour télécharger mon CV"
          />
          <ConstructionLogo />
        </section>
      </main>
    </>
  );
}

export default Contact;
