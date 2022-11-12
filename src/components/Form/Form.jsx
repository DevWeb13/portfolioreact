// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import ReactModal from 'react-modal';
import postEmail from '../../services/emailManager';
import getIpAdress from '../../services/getIpAdress';
import Loading from '../Loading/Loading';

ReactModal.setAppElement('#root');

function Form() {
  const [loader, setLoader] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoader(true);
    const ip = await getIpAdress();
    if (!ip) {
      // eslint-disable-next-line no-alert
      alert(
        "Error: Votre navigateur empéche l'envoi du commentaire. Veuillez essayer de désactiver votre bloqueur de publicité",
      );
      setLoader(false);
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
    postEmail(newComment);
    reset();
    setIsOpen(true);
    setLoader(false);
  }

  return loader ? (
    <Loading />
  ) : (
    <section className="formContainer">
      <ReactModal isOpen={modalIsOpen} contentLabel="Modal">
        <div className="modalContainer">
          <h2>
            Votre message a bien été envoyé.
            <br />
            <br />
            Une réponse vous sera envoyée dans les plus brefs délais.
            <br />
            <br />
            Merci.
          </h2>
          <TextField
            type="button"
            size="small"
            className="submit"
            value="🔙 retour"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </ReactModal>
      <h2>Envoyez moi un E-Mail 📝</h2>
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
        <div className="submitsContainer">
          <TextField
            type="submit"
            size="small"
            className="submit"
            value="Envoyer  📨"
          />
        </div>
      </form>
    </section>
  );
}

export default Form;
