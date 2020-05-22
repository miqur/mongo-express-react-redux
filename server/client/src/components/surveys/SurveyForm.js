import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

import SurveyField from "./SurveyField";

const SurveyForm = props => {
  const { handleSubmit, onSurveySubmit } = props;

  const renderFields = () => (
    _.map(FIELDS, ({ label, name }) => (
      <Field
        key={name}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
      />
    ))
  );
  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <Link
          to="/surveys"
          className="red btn-flat left white-text"
        >
          Cancel
        </Link>
        <button
          className="teal btn-flat right white-text"
          type="submit"
        >
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
