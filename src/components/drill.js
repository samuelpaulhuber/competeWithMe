/**
 * Created by samhuber on 7/8/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../utils/util';
import {updateDrill, addDrill} from '../actions';

class Drill extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values){
    if(values.id)
      this.props.updateDrill(this.props.dispatch, values, () => {this.props.history.push('/drills');});
    else
      this.props.addDrill(this.props.dispatch, values, () => {this.props.history.push('/drills');});
  }

  goToDrills(){
    this.props.history.push('/drills');
  }

  render(){
    const divStyle = {
      marginRight: '5px'
    };

    const {handleSubmit} = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            //arbitrary property label could be anything!!!
            label="Name"
            name="name"
            component={renderField}
          />
          <Field
            label="Image"
            name="image"
            component={renderField}
            // onChange={this.onImageChange.bind(this, event.target.value)}
          />
          {/*<img id="preview" className="img-responsive center-block" src={image} />*/}
          <Field
            label="Procedure"
            name="procedure"
            component={renderField}
          />
          <button type="submit" className="btn btn-success pull-right btn btn-primary">Save</button>
          <button style={divStyle} onClick={this.goToDrills.bind(this)} className="pull-left btn btn-danger">Back</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.title = 'Enter a Name';
  }
  if (!values.image) {
    errors.categories = 'Enter an Image Link';
  }
  if (!values.content) {
    errors.content = 'Enter the Drill Procedure';
  }
}
  // if we have properties in this object then there are errors


function mapStateToProps(state) {
  console.log(arguments);
  return {
    activeDrill: state.activeDrill,
    initialValues: state.activeDrill
  };
}

let drillForm = reduxForm({
  form: 'ShowDrillForm',
  enableReinitialize : true,
  validate
})(Drill);
export default connect(mapStateToProps,{updateDrill, addDrill})(drillForm);