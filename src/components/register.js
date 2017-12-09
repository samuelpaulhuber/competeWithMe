import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import Crypto from 'crypto-browserify';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/compete';

class Register extends Component {
  generateHash(password, salt){
    var hash = Crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
      salt:salt,
      passwordHash:value
    };
  };
  generateSalt(length){
    return Crypto.randomBytes(Math.ceil(length/2))
      .toString('hex') /** convert to hexadecimal format */
      .slice(0,length);
  }

  onSubmit(values){
    var salt = this.generateSalt(16);
    var hash = this.generateHash(values.password, salt);

    axios.post(`${ROOT_URL}/addUser`, {email: values.email, salt: hash.salt, password: hash.passwordHash})
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  }

  renderField(field){
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    //..field.input says take all my properties and assign them as properties to input jsx
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderFieldPassword(field){
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    //..field.input says take all my properties and assign them as properties to input jsx
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="password"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render(){
    const {handleSubmit} = this.props;
    console.log(this);
    return(
      <Panel header='Register'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={this.renderField}/>

          <Field
            label="Password"
            name="password"
            component={this.renderFieldPassword}/>

          <Field
            label="Confirm Password"
            name="confirmPassword"
            component={this.renderFieldPassword}/>

          <button type="submit" className="pull-right btn btn-primary">Submit</button>
        </form>
      </Panel>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.email){
    errors.email = 'Enter your email';
  }
  if(!values.password){
    errors.password = 'Enter your password';
  }
  if(!values.confirmPassword){
    errors.confirmPassword = 'Please confirm your password';
  }
  else if(values.confirmPassword !== values.password){
    errors.confirmPassword = 'Passwords must match';
  }

  // if we have properties in this object then there are errors
  return errors;
}
export default reduxForm({
  validate,
  form: 'RegisterForm'
})(Register);
