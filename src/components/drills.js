/**
 * Created by samhuber on 8/2/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GenericTable from './table/generic_table';
import {bindActionCreators} from 'redux';
import {LoadDefaultDrills, selectDrill, deleteDrill, removeActiveDrill} from '../actions/index';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class Drills extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.LoadDefaultDrills(this.props.dispatch);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  viewDrillInfo(drill){
    this.props.selectDrill(drill);
    this.props.history.push('/drill');
  }

  deleteDrill(drill){
    this.props.deleteDrill(this.props.dispatch, drill);
  }

  removeActiveDrill(){
    console.log('REMOVED!!!');
    this.props.removeActiveDrill();
  }


  render() {
    if(!this.props.drillData)
      return(<div>Loading...</div>);

    const columns = [
      {title: 'Id', dataIndex:'id', id: 1},
      {title: 'Name', dataIndex:'name', id: 2},
      {title: 'Image', type:'image', dataIndex:'image', id: 3},
      {title: 'Procedure', dataIndex:'procedure', id: 4},
      {title: 'Edit', customClass: 'center-icon', type:'icon', dataIndex:'sunglasses', action:this.viewDrillInfo.bind(this),  id: 5},
      {title: 'Delete', customClass: 'center-icon', type:'icon', dataIndex:'remove', action:this.deleteDrill.bind(this),  id: 6},
    ];

    return (
      <div>
        <h2>Drills</h2>

        {/*<Link className="pull-right btn btn-success" to="/load/addupdate">Add</Link>*/}
        <Link to='/drill' className="btn btn-success" onClick={this.removeActiveDrill()}>Add</Link>
        <GenericTable columns={columns} rows={this.props.drillData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drillData: state.drillData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({LoadDefaultDrills: LoadDefaultDrills, selectDrill: selectDrill, deleteDrill: deleteDrill, removeActiveDrill: removeActiveDrill}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Drills));