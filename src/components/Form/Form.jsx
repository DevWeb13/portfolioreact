/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('firstName', {
            required: 'Champ requis',
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
            maxLength: {
              value: 20,
              message: 'Max length is 20',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Alphabets only',
            },
          })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          type="text"
          {...register('lastName', {
            required: 'Champ requis',
            minLength: {
              value: 2,
              message: '2 caractéres minimum',
            },
            maxLength: {
              value: 20,
              message: '20 caractéres maximum',
            },
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <input
          type="email"
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
        <input
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

        <input
          {...register('message', {
            required: 'Champ requis',
            minLength: {
              value: 10,
              message: '10 caractéres minimum',
            },
            maxLength: {
              value: 1500,
              message: '1500 caractéres maximum',
            },
          })}
          placeholder="Message"
        />
        <p>{errors.message?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
