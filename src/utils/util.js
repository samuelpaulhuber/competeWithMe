import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

export function isTokenDefined(){
  if(localStorage.getItem('CompeteWithMeToken') === null ||
  localStorage.getItem('CompeteWithMeToken') === undefined ||
  localStorage.getItem('CompeteWithMeToken') === "")
    return false;

  return true;
}

export function renderField(field){

  if(!field)
    return;

  const {meta: {touched, error}} = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`

  //..field.input says take all my properties and assign them as properties to input jsx
  return(

    <div className={className}>
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        {...field.input}
      />
      {/*<img id="team-logo-img" className="img-responsive center-block" src="http://www.shootingusa.com/PRO_TIPS/USAMU7-6WarmUp/USAMU7-6-9.jpg" />*/}
      <div className="text-help">
        {touched ? error : ''}
      </div>

    </div>
  );
}
