/**
 * Created by samhuber on 8/3/17.
 */
import React from 'react';
import {Glyphicon} from 'react-bootstrap';
const GenericRow = ({data, columns, selectedId}) => {
  const headers = columns.map((column) => {

    switch(column.type){
      case ('checkbox'):
        console.log(selectedId);
        if(data['id'] == selectedId) {
          console.log('found selected');
          return <td key={column.id}><input type="checkbox" checked="true"/></td>;//checked={this.props.done} />
        }
        else
          return <td key={column.id}><input type="checkbox"/></td>;//checked={this.props.done} />
      case ('icon'):
        return <td className="centered" key={column.id}><a href="#" onClick={() => {column.action()}}><Glyphicon glyph={column.dataIndex}/></a></td>;
      case ('iconSetActive'):
        return <td className="centered" key={column.id}><a href="#" onClick={() => {column.action(column.id)}}><Glyphicon glyph={column.dataIndex}/></a></td>;
      case ('hyperlink'):
        return <td key={column.id}><a href={data[column.dataIndex]} target="_blank">{data[column.dataIndex]}</a></td>;
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