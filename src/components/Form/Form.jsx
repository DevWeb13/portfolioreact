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

    await postComment(newComment, comments);
    const newList = await getCommentsList(comments);
    setComments(newList);
    reset();
  }
  console.log(new Date().toLocaleString());
  console.log(errors);
  /* console.log(register); */
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Prénom"
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
        />
        {errors.prenom ? (
          <p className="error">{errors.prenom.message}</p>
        ) : (
          <p className="error" />
        )}

        <TextField
          id="outlined-basic"
          label="Nom"
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
        />
        {errors.nom ? (
          <p className="error">{errors.nom.message}</p>
        ) : (
          <p className="error" />
        )}
        <TextField
          id="outlined-basic"
          label="Email"
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
        />
        {errors.email ? (
          <p className="error">{errors.email.message}</p>
        ) : (
          <p className="error" />
        )}
        <TextField
          id="outlined-basic"
          label="Tel."
          variant="outlined"
          type="tel"
          {...register('phone', {
            pattern: {
              message: 'Numéro invalide',
              value: /^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/i,
            },
          })}
          placeholder="XX XX XX XX XX"
          size="small"
        />
        {errors.phone ? (
          <p className="error">{errors.phone.message}</p>
        ) : (
          <p className="error" />
        )}
        <TextField
          id="outlined-basic"
          label="Message"
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
          // champ de texte multi-lignes
          multiline
          size="small"
        />
        {errors.message ? (
          <p className="error">{errors.message.message}</p>
        ) : (
          <p className="error" />
        )}

        <TextField type="submit" size="small" className="submit" />
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
    }),
  ).isRequired,
  setComments: propTypes.func.isRequired,
};
