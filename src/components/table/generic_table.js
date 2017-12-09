/**
 * Created by samhuber on 8/3/17.
 */
import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import GenericRow from './generic_row';
import GenericHeader from './generic_header';
import _ from 'lodash';

class GenericTable extends Component{
  generateTableColumns(){
    return this.props.columns.map((column) => {
      return (
        <GenericHeader key={column.id} data={column}/>
      );
    });
  }

  generateTableRows(){
    return _.map(this.props.rows, load => {
      // this should be changed to its own component
      // because thats the only way to use a key
      return(
        <GenericRow key={load.id} data={load} columns={this.props.columns} selectedId={this.props.selectedId}/>
      );
    });
  }

  render() {
    if (!this.props.columns || !this.props.rows)
      return <div>No Data</div>;

    return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            {this.generateTableColumns()}
          </tr>
          </thead>
          <tbody>
            {this.generateTableRows()}
          </tbody>
        </Table>
    );
  }
};

export default GenericTable;