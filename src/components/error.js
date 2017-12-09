import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class Error extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values){
    //this.props.login(values);
  }

  render(){
    return(
      <Panel header='Error' bsStyle="danger">
        An error occurred, please try again later.
      </Panel>
    );
  }
}

export default Error;
