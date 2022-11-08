import React from 'react';
import propTypes from 'prop-types';

function Comments({ comments }) {
  return (
    <div className="comments">
      {comments.map((comment) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="comment" key={comment._id}>
          <p>
            {comment.prenom} {comment.nom}
          </p>
          <p>{comment.email}</p>
          <p>{comment.message}</p>
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
    }),
  ).isRequired,
};
