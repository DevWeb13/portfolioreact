/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import { getCommentsList } from '../../services/commentsManager';

function Contact() {
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(true);

  async function getData() {
    const data = await getCommentsList(comments);
    setComments(data);
    setLoader(false);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="commentsContainer">
      <Form comments={comments} setComments={setComments} />
      <Comments comments={comments} />
    </div>
  );
}

export default Contact;
