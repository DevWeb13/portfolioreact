import React, { useEffect } from 'react';
import propTypes from 'prop-types';

function Comments({ comments }) {
  console.log(comments);
  return (
    <div className="commentsContainer">
      {comments.map((comment) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="comment" key={comment._id}>
          <p className="commentTitle">
            <span>
              {comment.prenom} {comment.nom}
            </span>
            {'  '}
            le {comment.date.slice(0, 10)} à {comment.date.slice(11)}
          </p>
          <a
            href={`mailto:${comment.email}`}
            className="commentEmail"
            target="blank"
          >
            {comment.email}
          </a>
          <p className="commentTel">
            {comment.tel === 'XX XX XX XX XX' ? '' : comment.tel}
          </p>
          <p className="commentMessage">{comment.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;

Comments.propTypes = {
  comments: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
      prenom: propTypes.string.isRequired,
      nom: propTypes.string.isRequired,
      message: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      tel: propTypes.string.isRequired,
      ip: propTypes.objectOf(propTypes.string).isRequired,
    }),
  ).isRequired,
};
