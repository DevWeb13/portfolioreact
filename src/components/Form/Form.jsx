// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';
import { TextField } from '@mui/material';
import { getCommentsList, postComment } from '../../services/commentsManager';

function Form({ comments, setComments }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [comment, setComment] = useState({
    prenom: '',
    nom: '',
    message: '',
    email: '',
  });

  async function onSubmit(data) {
    console.log(data.prenom);
    // setComment({
    //   prenom: data.prenom,
    //   nom: data.nom,
    //   message: data.message,
    //   email: data.email,
    // });
    console.log({ comment });
    await postComment(
      {
        prenom: data.prenom,
        nom: data.nom,
        message: data.message,
        email: data.email,
      },
      comments,
    );
    const newList = await getCommentsList(comments);
    setComments(newList);
    reset();
  }

  console.log(errors);
  console.log(register);
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
        />

        <p>{errors.prenom?.message}</p>
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
          placeholder="Last Name"
        />
        <p>{errors.nom?.message}</p>
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
        />
        <p>{errors.email?.message}</p>
        <TextField
          id="outlined-basic"
          label="Tel."
          variant="outlined"
          type="Tel"
          {...register('phone', {
            pattern: {
              message: 'Numéro invalide',
              value: /^[0-9]{10}$/i,
            },
          })}
          placeholder="Phone"
        />
        <p>{errors.phone?.message}</p>

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
        />
        <p>{errors.message?.message}</p>

        <TextField type="submit" />
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
