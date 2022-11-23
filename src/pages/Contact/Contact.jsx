import React from 'react';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import Form from '../../components/Form/Form';
import ConstructionLogo from '../../components/ConstructionLogo/ConstructionLogo';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <main className="contactContainer" id="contactContainer">
        <section className="mailAndCV">
          <Form />
          <ButtonLink
            href="./CV_GIULIANO_LOIC.pdf"
            text="Cliquer ici pour télécharger mon CV"
            iconFontAwesome={faFilePdf}
          />
        </section>
        <section className="other">
          <ConstructionLogo />
        </section>
      </main>
    </>
  );
}

export default Contact;
