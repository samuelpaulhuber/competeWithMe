/**
 * Created by samhuber on 8/3/17.
 */
import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const GenericRow = ({data, columns, selectedId}) => {
  const headers = columns.map((column) => {

    switch(column.type){
      case ('checkbox'):
        if(data['id'] == selectedId) {
          return <td key={column.id}><input type="checkbox" checked="true"/></td>;//checked={this.props.done} />
        }
        else
          return <td key={column.id}><input type="checkbox"/></td>;//checked={this.props.done} />
      case ('icon'):
        return <td className="centered" key={column.id}><a href="#" onClick={() => {column.action(data)}}><Glyphicon glyph={column.dataIndex}/></a></td>;
      case ('iconSetActive'):
        return <td className="centered" key={column.id}><a href="#" onClick={() => {column.action(data['id'])}}><Glyphicon glyph={column.dataIndex}/></a></td>;
      case ('hyperlink'):
        return <td key={column.id}><a href={data[column.dataIndex]} target="_blank">{data[column.dataIndex]}</a></td>;
      case ('navigateIconWithAction'):
        return (<td><Link to={column.route} onClick={() => {column.action(data)}}><Glyphicon glyph={column.dataIndex}/></Link></td>);
      case ('buttonWithStyleAndAction'):
        return (<td><Button className={column.customClass} bsStyle={column.buttonStyle} onClick={() => {column.action(data)}}><Glyphicon glyph={column.dataIndex}/></Button></td>);//<td><Link to={column.route} onClick={() => {column.action(data)}}><Glyphicon glyph={column.dataIndex}/></Link></td>);
      case ('image'):
        return (<td key={column.id}>
                  <span><a href={data[column.dataIndex]} target="_blank">View Image</a></span>
                  <img src={data[column.dataIndex]} alt="image" height="100px" />
               </td>);
      default:
        return <td key={column.id}>{data[column.dataIndex]}</td>
    }
  });

  return (
    <tr>
      {headers}
    </tr>
  );
};

export default GenericRow;