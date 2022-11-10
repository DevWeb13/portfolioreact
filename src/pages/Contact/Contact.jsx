/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import ConstructionLogo from '../../components/ConstructionLogo/ConstructionLogo';
import { getCommentsList } from '../../services/commentsManager';

function Contact() {
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);

  async function getData() {
    const data = await getCommentsList(comments);
    setComments(data.reverse());
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Contact</h1>
      <main className="contactContainer">
        <section className="formAndCommentsContainer">
          <h2>Postez un commentaire ou envoyez un mail pour me contacter</h2>
          <Form comments={comments} setComments={setComments} />
          <Comments comments={comments} />
        </section>
        <section className="other">
          <ConstructionLogo />
        </section>
      </main>
    </>
  );
}

export default Contact;
