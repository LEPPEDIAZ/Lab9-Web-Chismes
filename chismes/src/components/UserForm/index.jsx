import uuid from 'uuid-v4';
import validator from 'email-validator';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/users';


const renderInput = ({ input, meta, ...props }) => (
  <div className="my-input">
    {
      meta.error && meta.touched && (
        <div className="error">
          { meta.error }
        </div>
      )
    }
    <input {...input} {...props} />
  </div>
);

const UserForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h4> Titulo </h4>
    <Field
      type="text"
      name="Titulo"
      placeholder="Titulo:"
      component={renderInput}
    />
    <h4> Descripcion </h4>
    <Field
      type="text"
      name="chisme"
      placeholder="Descripcion:"
      component={renderInput}
    />
    
    <button type="submit">
      Agregar!
    </button>
  </form>
);


export default reduxForm({
  form: 'createUserForm',
  onSubmit(values, dispatch) {
    console.log(uuid())
    dispatch(actions.addUser(
      uuid(),
      values.Titulo,
      values.lastName,
      values.email,
      values.chisme,
    ));
  },
  validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required!";
    } else {
      if (!validator.validate(values.email)) {
        errors.email = "Email is invalid!";
      }
    }

    return errors;
  }
})(UserForm);
