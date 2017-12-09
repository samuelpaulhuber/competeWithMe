import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Crypto from 'crypto';
import {Link} from 'react-router-dom';
import {login} from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {isAuthenticated: false};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.loginData.isAuthenticated)
      window.location.replace("http://localhost:9000");
    // this.setState({
    //   likesIncreasing: nextProps.likeCount > this.props.likeCount
    // });
  }
  generateSalt(){
    var min = 10;
    var max = 20;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;

    if(random % 2 !== 0)
      random++;

    // 40 should probably should be a variable that is dynamically calculated
    return crypto.randomBytes(Math.ceil(random/2))
      .toString('hex') /** convert to hexadecimal format */
      .slice(0,length);
  }

  onSubmit(values){
    this.props.login(values);
  }

  renderField(field){
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
      <Panel header='Login'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={this.renderField}/>

          <Field
            label="Password"
            name="password"
            component={this.renderFieldPassword}/>

          <Link className="btn btn-success" to="/register">Register</Link>
          <button type="submit" className="pull-right btn btn-primary">Login</button>
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

  // if we have properties in this object then there are errors
  return errors;
}
function mapStateToProps(state) {
  return {loginData: state.loginData};
}
export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps,{login})(Login)
);//(Login);
