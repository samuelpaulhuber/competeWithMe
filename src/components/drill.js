/**
 * Created by samhuber on 7/8/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../utils/util';

class Drill extends Component {
  constructor(props) {
    super(props);

    this.state = {drill: {}, name: 'turkey', procedure: 'fuck'};
  }

  getLatestDrill(id){
    var drill = {
      name: 'Four Aces',
      image: 'https://static1.squarespace.com/static/5928efc53a041194d4290832/t/59baf9cfb078698e4757fb93/1505425880621/Double+Reload+Double.png?format=1500w',
      procedure: `At the standard distance of seven yards, I have selected a 2.5 second goal time. This allows for a 1 second draw, a 1.1 second reload, and two .2 second splits. If you find yourself unable to make that 2.5 second goal time, carefully go through the data from the timer and find the “low hanging fruit”.
      Now, I feel like I should point out that some people can go much faster than the 2.5 second goal time. It is possible to get a draw time into the .60s and a reload time into the .70s (I have heard some reported times even faster than that). The sky is absolutely the limit on this drill.
      In order to be competitive in the sport, you don’t need some insane reload time like a .75, but you do need to be able to reload the gun in about 1 second flat on a fairly consistent basis in practice. If you can’t do it, you are going to have a problem.
      The key to this drill is dryfire training, this is just a “check” for you to make sure you are headed in the right direction.`
    }
  }

  render(){
    console.log(this.props);
    if(!this.props.activeDrill){
      return(
        <div>Loading...{this.props.activeDrill}</div>
      );
    }

    let drill = this.getLatestDrill();
    const divStyle = {
      marginRight: '5px'
    };
    return (
      <div>
        <form>
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
          />
          <Field
            label="Procedure"
            name="procedure"
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
  return {
    activeDrill: state.activeDrill,
    initialValues:{
      name: 'Four Aces',
      image: 'https://static1.squarespace.com/static/5928efc53a041194d4290832/t/59baf9cfb078698e4757fb93/1505425880621/Double+Reload+Double.png?format=1500w',
      procedure: `At the standard distance of seven yards, I have selected a 2.5 second goal time. This allows for a 1 second draw, a 1.1 second reload, and two .2 second splits. If you find yourself unable to make that 2.5 second goal time, carefully go through the data from the timer and find the “low hanging fruit”.
      Now, I feel like I should point out that some people can go much faster than the 2.5 second goal time. It is possible to get a draw time into the .60s and a reload time into the .70s (I have heard some reported times even faster than that). The sky is absolutely the limit on this drill.
      In order to be competitive in the sport, you don’t need some insane reload time like a .75, but you do need to be able to reload the gun in about 1 second flat on a fairly consistent basis in practice. If you can’t do it, you are going to have a problem.
      The key to this drill is dryfire training, this is just a “check” for you to make sure you are headed in the right direction.`
    }
  };
}

let drillForm = reduxForm({
  form: 'ShowDrillForm',
  enableReinitialize : true,
  validate
})(Drill);
export default connect(mapStateToProps)(drillForm);