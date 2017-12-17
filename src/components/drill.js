// import {React, Component} from 'react';
// import {connect} from 'react-redux';
//
// class Drill extends Component{
//
//   render(){
//     return(
//       <h3>hi</h3>
//     );
//     // if(!this.props.activeDrill) {
//     //   return (
//     //     <div>
//     //       <h3>Loading...</h3>
//     //     </div>
//     //   );
//     // }
//     // else {
//     //   return (
//     //     <div>
//     //       Drill Info
//     //       <div>Name: {this.props.activeDrill.name}</div>
//     //       <div>Image: {this.props.activeDrill.image}</div>
//     //       <div>Procedure: {this.props.activeDrill.procedure}</div>
//     //     </div>
//     //   );
//     // }
//   }
// }
//
// function mapStateToProps(state) {
//   return {
//     activeDrill: state.activeDrill
//   };
// }
//
// export default connect(mapStateToProps)(Drill);
/**
 * Created by samhuber on 7/8/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Drill extends Component {
  render(){
    console.log(this.props);
    if(!this.props.activeDrill){
      return(
        <div>Loading...{this.props.activeDrill}</div>
      );
    }
    return <div>Loading2...{this.props.activeDrill}</div>;
  }
}

function mapStateToProps(state) {
  return {
    activeDrill: state.activeDrill
  };
}

export default connect(mapStateToProps)(Drill);
