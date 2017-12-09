/**
 * Created by samhuber on 8/31/17.
 */
import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';
//import { setIdToken, setAccessToken } from '../utils/AuthService';

class Welcome extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    // setAccessToken();
    // setIdToken();
    // window.location.href = "/";
  }

  render() {
    return (
      <Panel header='Welcome' >
        <Image src="/images/stock2.png" responsive />
      </Panel>
        // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        //   <Field
        //     label="Email"
        //     name="email"
        //     component={this.renderField}/>
        //
        //   <Field
        //     label="Password"
        //     name="password"
        //     component={this.renderFieldPassword}/>
        //
        //   <Link className="btn btn-success" to="/register">Register</Link>
        //   <button type="submit" className="pull-right btn btn-primary">Login</button>
        // </form>
      // </Panel>
    );
  }
}

export default Welcome;
