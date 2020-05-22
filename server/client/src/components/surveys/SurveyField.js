import React from 'react';

const SurveyField = props => {
  const { input, label, meta: { error, touched } } = props;
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: '5px'}} {...input} />
      <div className="red-text" style={{ marginBottom: '20px'}}>{touched && error}</div>
    </div>
  );
};

export default SurveyField;
