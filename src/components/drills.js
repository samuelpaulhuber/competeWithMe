/**
 * Created by samhuber on 8/2/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GenericTable from './table/generic_table';
import {Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {LoadDefaultDrills, selectDrill} from '../actions/index';

class Drills extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.LoadDefaultDrills(this.props.dispatch);
  }
  viewDrillInfo(id){
    this.props.selectDrill(id);
  }
  render() {
    if(!this.props.drillData)
      return(<div>Loading...</div>);

    const columns = [
      {title: '', type:'checkbox', dataIndex:'selected', id: 6},
      {title: 'Id', dataIndex:'id', id: 1},
      {title: 'Name', dataIndex:'name', width: '75px', id: 2},
      {title: 'Image', type:'image', dataIndex:'image', id: 3},
      {title: 'Procedure', dataIndex:'procedure', id: 4},
      {title: 'Edit', type:'iconSetActive', dataIndex:'sunglasses', action:this.viewDrillInfo.bind(this),  id: 5},
    ];

    return (
      <div>
        <h2>Drills</h2>

        {/*<Link className="pull-right btn btn-success" to="/load/addupdate">Add</Link>*/}
        <Button bsStyle="success">Add</Button>
        <Button bsStyle="danger" className="pull-right">Delete</Button>
        <GenericTable columns={columns} selectedId={this.props.activeDrill} rows={this.props.drillData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drillData: state.drillData,
    activeDrill: state.activeDrill
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({LoadDefaultDrills: LoadDefaultDrills, selectDrill: selectDrill}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Drills);