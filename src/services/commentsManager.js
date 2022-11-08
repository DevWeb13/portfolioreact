async function getCommentsList(comments) {
  try {
    const response = await fetch('http://localhost:5000/comments', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.json();
  } catch (err) {
    try {
      const response = await fetch(
        'https://back-portfolio-devweb13.vercel.app/comments',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response.json();
    } catch (error) {
      console.log(error);
      return comments;
    }
  }
}

async function postComment(comment, comments) {
  console.log(comment);
  try {
    const response = await fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    return response.json();
  } catch (err) {
    try {
      const response = await fetch(
        'https://back-portfolio-devweb13.vercel.app/comments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comment),
        },
      );
      console.log(response);
      return response.json();
    } catch (error) {
      // console.log(error);
      return comments.push(comment);
    }
  }
}

export { getCommentsList, postComment };
