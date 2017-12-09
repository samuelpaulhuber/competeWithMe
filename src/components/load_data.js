/**
 * Created by samhuber on 8/2/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GenericTable from './table/generic_table';
import {bindActionCreators} from 'redux';
import {LoadDefaultData} from '../actions/index';
import {Link} from 'react-router-dom';

class LoadData extends Component{
  constructor(props) {
    super(props);

    this.state = {showForm: false};
  }
  componentDidMount(){
    this.props.LoadDefaultData();
  }
  setFormStatus(visible){
    this.setState({showForm: visible});
  }
  render() {
    if(!this.props.loadData)
      return(<tr>Loading...</tr>);

    const columns = [
      {title: 'Bullet Manufacturer', dataIndex:'bulletManufacturer', id: 1},
      {title: 'Bullet Weight', dataIndex:'bulletWeight', id: 2},
      {title: 'Powder Manufacturer', dataIndex:'powderManufacturer', id: 3},
      {title: 'Powder Charge', dataIndex:'powderCharge', id: 4},
      {title: 'Primer Manufacturer', dataIndex:'primerManufacturer', id: 5},
      {title: 'Primer Type', dataIndex:'primerType', id: 6},
      {title: 'OAL', dataIndex:'oal', id: 7},
      {title: 'Major', dataIndex:'majorLoad', id: 8},
      {title: 'Edit', isIcon:true, dataIndex:'pencil', action:this.setFormStatus.bind(this),  id: 9},
      {title: 'Delete', isIcon:true, dataIndex:'remove', id: 10}
      ];

    return (
      <div>
        <h2>Load Data</h2>

        <Link className="pull-right btn btn-success" to="/load/addupdate">Add</Link>
        <GenericTable columns={columns} rows={this.props.loadData}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loadData: state.loadData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({LoadDefaultData: LoadDefaultData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadData);
