import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { submitSurvey } from '../../actions';

const SurveyFormReview = props => {
  const { onCancel, formValues, submitSurvey, history } = props;

  const reviewFields = () => _.map(FIELDS, ({name, label}) => (
    <div key={name}>
      <label>{label}</label>
      <div>
        {formValues[name]}
      </div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm you entries</h5>
      {reviewFields()}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
      <button onClick={() => submitSurvey(formValues, history)} className="green white-text btn-flat right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  }
};

export default compose(
  connect(mapStateToProps, { submitSurvey }),
  withRouter
)(SurveyFormReview);
