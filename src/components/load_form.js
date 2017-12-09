/**
 * Created by samhuber on 8/5/17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../utils/util';

class LoadForm extends Component{
  // renderField(field){
  //   const {meta: {touched, error}} = field;
  //   const className = `form-group ${touched && error ? 'has-danger' : ''}`
  //
  //   //..field.input says take all my properties and assign them as properties to input jsx
  //   return(
  //     <div className={className}>
  //       <label>{field.label}</label>
  //       <input
  //         className="form-control"
  //         type="text"
  //         {...field.input}
  //       />
  //       <div className="text-help">
  //         {touched ? error : ''}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const divStyle = {
      marginRight: '5px'
    };
    return (
      <div>
      <form>
        <Field
          //arbitrary property label could be anything!!!
          label="Bullet Manufacturer"
          name="bulletManufacturer"
          component={renderField}
        />
        <Field
          label="Bullet Weight"
          name="bulletWeight"
          component={renderField}
        />
        <Field
          label="Powder Manufacturer"
          name="powderManufacturer"
          component={renderField}
        />
        <Field
          label="Powder Charger"
          name="powderCharge"
          component={renderField}
        />
        <Field
          label="Primer Manufacturer"
          name="primerManufacturer"
          component={renderField}
        />
        <Field
          label="OAL"
          name="oal"
          component={renderField}
        />
        <Field
          label="Major"
          name="majorLoad"
          component={renderField}
        />
        <button type="submit" className="pull-right btn btn-primary">Save</button>
        <button style={divStyle} className="pull-right btn btn-primary">Back</button>
      </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a Title';
  }
  if(!values.categories){
    errors.categories = 'Enter some Categories';
  }
  if(!values.content){
    errors.content = 'Enter some Content';
  }

  // if we have properties in this object then there are errors
  return errors;
}
export default reduxForm({
  validate,
  form: 'ShowsLoadForm'
})(LoadForm);


// function mapStateToProps(state) {
//   return {
//     loadData: state.loadData
//   };
// }
//
// export default connect(mapStateToProps)(LoadData);
