// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import { TextField } from '@mui/material';
import { getCommentsList, postComment } from '../../services/commentsManager';
import getIpAdress from '../../services/getIpAdress';

function Form({ comments, setComments }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log({ data });
    const ip = await getIpAdress();
    if (!ip) {
      // eslint-disable-next-line no-alert
      alert(
        "Error: Votre navigateur empéche l'envoi du commentaire. Veuillez essayer de désactiver votre bloqueur de publicité",
      );
      return;
    }
    const newComment = {
      ...data,
      date: new Date().toLocaleString(),
      ip,
    };
    if (!newComment.tel) {
      newComment.tel = 'XX XX XX XX XX';
    }
    console.log({ newComment });
    await postComment(newComment, comments);
    const newList = await getCommentsList(comments);
    setComments(newList.reverse());
    reset();
  }
  console.log(new Date().toLocaleString());
  console.log(errors);
  // console.log(register);
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Prénom*"
          variant="outlined"
          type="text"
          error={!!errors.prenom}
          {...register('prenom', {
            required: 'Champ requis',
            minLength: {
              value: 2,
              message: 'Minimum 2 caractères',
            },
            maxLength: {
              value: 20,
              message: 'Maximum 20 caractères',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Seulement des lettres',
            },
          })}
          placeholder="Prénom"
          size="small"
          fullWidth
        />
        {errors.prenom ? (
          <p className="error">{errors.prenom.message}</p>
        ) : (
          <p className="error" />
        )}

        <TextField
          id="outlined-basic"
          label="Nom*"
          variant="outlined"
          type="text"
          error={!!errors.nom}
          {...register('nom', {
            required: 'Champ requis',
            minLength: {
              value: 2,
              message: 'Minimum 2 caractères',
            },
            maxLength: {
              value: 20,
              message: 'Maximum 20 caractères',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Seulement des lettres',
            },
          })}
          placeholder="Nom"
          size="small"
          fullWidth
        />
        {errors.nom ? (
          <p className="error">{errors.nom.message}</p>
        ) : (
          <p className="error" />
        )}
        <TextField
          id="outlined-basic"
          label="Email*"
          variant="outlined"
          type="email"
          error={!!errors.email}
          {...register('email', {
            required: 'Champ requis',
            pattern: {
              message: 'Email invalide',
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
          placeholder="Email"
          size="small"
          fullWidth
        />
        {errors.email ? (
          <p className="error">{errors.email.message}</p>
        ) : (
          <p className="error" />
        )}

        <TextField
          id="outlined-basic"
          label="Tel"
          variant="outlined"
          type="tel"
          {...register('tel', {
            pattern: {
              message: 'Numéro invalide',
              value: /^[0-9]{10}$/i,
            },
          })}
          placeholder="XXXXXXXXXX"
          size="small"
          fullWidth
        />
        {errors.tel ? (
          <p className="error">{errors.tel.message}</p>
        ) : (
          <p className="error" />
        )}
        <TextField
          id="outlined-basic"
          label="Message*"
          type="text"
          variant="outlined"
          error={!!errors.message}
          {...register('message', {
            required: 'Champ requis',
            minLength: {
              value: 10,
              message: 'Minimum 10 caractères',
            },
            maxLength: {
              value: 1500,
              message: 'Maximum 1500 caractères',
            },
          })}
          placeholder="Message"
          multiline
          size="small"
          fullWidth
        />
        {errors.message ? (
          <p className="error">{errors.message.message}</p>
        ) : (
          <p className="error" />
        )}

        <TextField type="submit" size="small" className="submit" />
        <p>* required</p>
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
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
  setComments: propTypes.func.isRequired,
};
