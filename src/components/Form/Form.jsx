/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <div className="formContainer">
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          {...register('firstName', {
            required: 'This is required',
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
            required: 'This is required',
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
            maxLength: {
              value: 20,
              message: 'Max length is 20',
            },
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <input
          type="email"
          {...register('email', {
            required: 'This is required',
            pattern: {
              message: 'Invalid email address',
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
          placeholder="Email"
        />
        <input
          type="Tel"
          {...register('phone', {
            pattern: {
              message: 'Invalid phone number',
              value: /^[0-9]{10}$/i,
            },
          })}
          placeholder="Phone"
        />
        <input
          {...register('message', {
            required: 'This is required',
            minLength: {
              value: 10,
              message: 'Min length is 10',
            },
            maxLength: {
              value: 1500,
              message: 'Max length is 1500',
            },
          })}
          placeholder="Message"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
